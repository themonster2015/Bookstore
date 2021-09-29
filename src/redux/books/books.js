const initialState = [];
const API = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/oa9YQGVMue7pHdJC3vtE/';

const ADD_BOOKS = 'bookStore/books/ADD_BOOKS';
const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

export const removeBook = (payload) => async (dispatch) => fetch(`${API}books/${payload}`, {
  method: 'DELETE',
  body: JSON.stringify({ item_id: payload }),
})
  .then(() => {
    dispatch({
      type: REMOVE_BOOK,
      payload,
    });
  })
  .catch((err) => {
    console.log(err);
  });

export const addBook = (payload) => async (dispatch) => fetch(`${API}books`, {
  method: 'POST',
  credentials: 'same-origin',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(payload),
})
  .then((res) => {
    if (res.status === 201) {
      dispatch({ type: ADD_BOOK, payload });
    }
  })
  .catch((err) => {
    console.log(err);
  });

export const viewBooks = () => async (dispatch) => fetch(`${API}books`).then((res) => res.json())
  .then((books) => {
    const res = Object.entries(books).map(([key, value]) => {
      const [temp] = [...value];
      return {
        item_id: key,
        ...temp,
      };
    });

    dispatch({ type: ADD_BOOKS, payload: res });
  });

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOKS:
      return [...state, ...action.payload];
    case ADD_BOOK:
      return [...state, action.payload];

    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== action.payload);

    default:
      return state;
  }
};

export default bookReducer;
