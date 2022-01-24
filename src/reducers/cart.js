const initialState = {
  items: []
};

const addToCart = (items, newItem) => {
  const tempItems = items;
  for(let index = 0; index < items.length; index++) {
    if (items[index].id === newItem.id) {
      tempItems[index].addedCount += 1;
      return (tempItems);
    }
  };
  const tempNewItem = newItem;
  tempNewItem.addedCount = 1;
  return([...items, tempNewItem]);
};

const changeQuantity = (items, id, diff) => {
  const tempItems = items;
  for(let index = 0; index < items.length; index++) {
    if (items[index].id === id) {
      tempItems[index].addedCount += diff;
      return (tempItems[index].addedCount !== 0 ? tempItems : tempItems.filter(elem => elem.id !== id));
    }}};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        items: addToCart(state.items, action.payload)
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        items: state.items.filter(elem => elem.id !== action.payload)
      };
    case "INCREASE_QUANTITY":
      return {
        ...state,
        items: changeQuantity(state.items, action.payload, 1)
      };
    case "DECREASE_QUANTITY":
      return {
        ...state,
        items: changeQuantity(state.items, action.payload, -1)
      };
    default:
      return state;
  }
}
