import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import orderBy from 'lodash/orderBy';


// import { setBooks } from "../actions/books";
// import { setFilter } from "../actions/filter";

import * as booksActions from "../actions/books";
import * as filterActions from "../actions/filter";

import App from '../components/App';

const sortBy = ({ items, filterBy }) => {
  switch (filterBy) {
    case 'all':
      return items;
    case 'title':
      return orderBy(items, 'title', 'asc');
      case 'price_high':
      return orderBy(items, 'price', 'desc');
    case 'price_low':
      return orderBy(items, 'price', 'asc');
    case 'author':
      return orderBy(items, 'author', 'asc');
    default:
      return items;
  }
}

const mapStateToProps = ({ books }) => ({
  books: sortBy(books),
  isReady: books.isReady,
});

// const mapDispatchToProps = (dispatch) => ({
//   setNewBooks: (books) => dispatch(setBooks(books)),
//   setFilter: filter => dispatch(setFilter(filter))
// });

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(booksActions, dispatch),
  ...bindActionCreators(filterActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);