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
      return produce(state, (drafState) => {
        //IMPORTANTCOMMENT inmmer functions produce must return void
        drafState.push(action.payload);
      });

    case types.updateProduct:
      //IMPORTANTCOMMENT inmmer functions produce must return void
      return produce(state, (draftState) => {
        const index = draftState.findIndex(
          ({ id }) => id === action.payload.id
        );
        draftState[index] = action.payload;
      });
    case types.deleteProduct:
      //IMPORTANTCOMMENT inmmer functions produce must return void
      return produce(state, (draftState) => {
        const index = draftState.findIndex(
          ({ id }) => id === action.payload.id
        );
        draftState.splice(index, 1);
      });
    default:
      return state;
  }
};
