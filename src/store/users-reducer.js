export const userTypes = {
  getUsers: '[Users] get users',
};

export const getUsers = (payload) => ({ type: userTypes.getUsers, payload });

export const usersReducer = (state = [], action) => {
  switch (action.type) {
    case userTypes.getUsers:
      console.log('getUsers');
      console.log(action);
      return action.payload;
    default:
      return state;
  }
};
