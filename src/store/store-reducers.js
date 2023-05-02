import { idGenerator } from './../helpers/idGenerator';
import { produce } from 'immer';
import { types } from './store-types';
const initialState = [
  { id: idGenerator(), name: 'apple' },
  { id: idGenerator(), name: 'banana' },
  { id: idGenerator(), name: 'peach' },
  { id: idGenerator(), name: 'orange' },
  { id: idGenerator(), name: 'blueberry' },

  { id: idGenerator(), name: 'watermelon' },
];
//IMPORTANTCOMMENT
// //VANILLA REDUX REDUCERS
// export const storeReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case types.addProduct:
//       return [...state, action.payload];
//     case types.updateProduct:
//       return state.map((fruit) =>
//         fruit.id === action.payload.id ? { ...action.payload } : fruit
//       );
//     case types.deleteProduct:
//       return state.filter(({ id }) => id !== action.payload.id);
//     default:
//       return state;
//   }
// };
//VANILLA REDUX REDUCERS

export const storeReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.addProduct:
      console.log('unnmer');
      // return [...state, { ...action.payload }];
      return produce(state, (drafState) => {
        drafState.push(action.payload);
      });
    // const nextState = produce((draftState, draft) => {
    //   draft.push(action.payload);
    //   return state;
    // });
    // return nextState;

    case types.updateProduct:
      return state.map((fruit) =>
        fruit.id === action.payload.id ? { ...action.payload } : fruit
      );
    case types.deleteProduct:
      return state.filter(({ id }) => id !== action.payload.id);
    default:
      return state;
  }
};
