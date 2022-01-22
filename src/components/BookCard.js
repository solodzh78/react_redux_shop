import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

const BookCard = ({ title, author, image, price }) => (
  <Card>
    <Image src={ image } wrapped ui={false} />
    <Card.Content>
      <Card.Header>{title}</Card.Header>
      <Card.Meta>
        {author}
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <a>
				{ price }
        <Icon name="rub" />
      </a>
    </Card.Content>
  </Card>
);

export default BookCard;
