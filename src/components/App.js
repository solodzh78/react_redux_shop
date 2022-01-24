import React, { useEffect } from 'react';
import axios from 'axios';
import { Container, Card } from 'semantic-ui-react';

import Menu from '../containers/Menu';
import BookCard from '../containers/BookCard';
import Filter from '../containers/Filter';

function App({ setBooks, books, isReady }) {
  useEffect(() => {
    try {
      (async() => {
        const { data } = await axios.get('books.json');
        setBooks(data);
      })();
    } catch (error) {
      console.error(error);
      alert('Ошибка при загрузке данных с сервера');
    }
  }, []);
  
  return ( 
    
    <Container>
      <Menu />
      <Filter />
      <Card.Group itemsPerRow={4}>
      {!isReady ? 'Загрузка...' : books.map(book => (
            <BookCard 
              key={book.id}
              {...book}
            />))}
      </Card.Group>
    </Container>

  );
}

export default App;
