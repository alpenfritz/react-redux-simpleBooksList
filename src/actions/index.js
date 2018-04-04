// action creators
export function selectBook(book) {
  // returns an action (= object with a TYPE property)
  return {
    type: 'BOOK_SELECTED',
    payload: book,
  };
}
