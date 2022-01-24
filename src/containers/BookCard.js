import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import * as cartActions from "../actions/cart";
import BookCard from "../components/BookCard";

const mapStateToProps = ({ cart:{items} }, { id }) => {
  return ({
    addedCount: items.reduce((count, item) => count + (item.id === id ? item.addedCount : 0), 0)
})};

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(cartActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(BookCard);
