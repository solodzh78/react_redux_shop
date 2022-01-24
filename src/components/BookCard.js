import React from "react";
import { Button, Card, Icon, Image } from "semantic-ui-react";

const BookCard = ({ id, title, author, image, price, addToCart, addedCount }) => {
  const book ={ id, title, author, image, price, addedCount };
  return(
  <Card>
    <Image src={ image } wrapped ui={false} />
    <Card.Content>
      <Card.Header>{title}</Card.Header>
      <Card.Meta>
        {author}
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <div>
				{ price }
        <Icon name="rub" />
      </div>
    </Card.Content>
    <Button color={'blue'} onClick={addToCart.bind(this, book)}>Добавить в корзину {addedCount > 0 && `(${addedCount})`}</Button>
  </Card>
)};

export default BookCard;
