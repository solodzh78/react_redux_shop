import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import uniqBy from "lodash/uniqBy";

import * as cartActions from "../actions/cart";

import Menu from "../components/Menu";

const mapStateToProps = ({ cart:{items} }) => ({
  items: uniqBy(items, item => item.id),
  totalPrice: items.reduce((total, item) => item.price * item.addedCount + total, 0),
  countCart: items.reduce((count, item) => item.addedCount + count, 0)
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(cartActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
