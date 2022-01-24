import { Menu, Popup } from "semantic-ui-react";

import styles from './Menu.module.css';

const CartComponent = ({ id, title, image, addedCount, removeFromCart, increaseQuantity, decreaseQuantity }) => {
  return(
    <>
    <div className={styles.wrapper}>
      <div className={styles.wrapper1}>
        <img className={styles.img} src={image} alt="bookImage"/>
        <span className={styles.title}>{title}</span>
      </div>
      <div className={styles.wrapper2}>
        <span>{addedCount}&nbsp;шт.</span>
        <div  className={styles.wrapper3}>
          <button className={styles['btn-plus']} onClick={increaseQuantity.bind(this, id)}>+</button>
          <button className={styles['btn-minus']} onClick={decreaseQuantity.bind(this, id)}>-</button>
        </div>
        <button className={styles.btn} onClick={removeFromCart.bind(this, id)}>Удалить</button>    
      </div>
    </div>
  </>
  );
};

const MenuBasic = ({ totalPrice, countCart, items, removeFromCart, increaseQuantity, decreaseQuantity }) => (
  <>
    <Menu>
      <Menu.Item>Магазин книг</Menu.Item>
      <Menu.Item position='right'>Итого: &nbsp; <b>{totalPrice}</b> &nbsp; руб.</Menu.Item>
      <Popup
        trigger={
          <Menu.Item>Корзина <b>({countCart})</b></Menu.Item>
        }
        hideOnScroll
        on={"click"}
        wide="very"
        style={{maxWidth: '400px'}}
        disabled={items.length === 0}
      >
        <Popup.Header></Popup.Header>
        <Popup.Content>
          {items.map((item, index) => <CartComponent 
                                        key={index} 
                                        {...item} 
                                        removeFromCart={removeFromCart}
                                        increaseQuantity={increaseQuantity}
                                        decreaseQuantity={decreaseQuantity} />)}
        </Popup.Content>
      </Popup>
    </Menu>
  </>

)

export default  MenuBasic;