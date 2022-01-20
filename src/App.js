import { connect } from 'react-redux';
import { setBooks } from './actions/books';


function App(props) {
  const { books: {books}, setBooks } = props;
  console.log(props);
  const newBooks = [
    {
      id: 0,
      title: 'Shopping cart'
    }
  ];
  return (
    <div className="App">
      <h1>{books[0].title}</h1>
      <button onClick={() => setBooks(newBooks)}>SET NEW BOOKS</button>
    </div>
  );
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  setBooks: books => dispatch(setBooks(books))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
