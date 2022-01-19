const initialState = {
  books: []
};

export default function booksReducer(state = initialState, action) {

  switch (action.type) {
    case 'SET_BOOKS':
      return {
        ...state,
        books: action.payload.books
      };
    case 'ADD_BOOKS':
      return {
        ...state,
        books: [...state.books, action.payload]
      };
    default:
      return state;
  }

};