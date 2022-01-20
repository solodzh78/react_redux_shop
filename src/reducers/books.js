const initialState = {
  books: [
    {
      id: 0,
      title: 'Hello book1'
    }
  ]
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
        books: [...state.books, action.payload.books]
      };
    default:
      return state;
  }

};