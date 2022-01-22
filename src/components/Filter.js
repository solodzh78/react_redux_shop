import React from "react";
import { Menu, Input } from "semantic-ui-react";

const Filter = ({ setFilter, filterBy, setQuery, searchQuery }) => (
    <div>
      <Menu secondary>
        <Menu.Item
          name="all"
          active={filterBy === "all"}
          onClick={setFilter.bind(this, 'all')}
        >
          Без сортировки
        </Menu.Item>
        <Menu.Item
          active={filterBy === "title"}
          onClick={setFilter.bind(this, 'title')}
        >
          Название
        </Menu.Item>
        <Menu.Item
          active={filterBy === "price_high"}
          onClick={setFilter.bind(this, 'price_high')}
        >
          Цена (дорогие)
        </Menu.Item>
        <Menu.Item
          active={filterBy === "price_low"}
          onClick={setFilter.bind(this, 'price_low')}
        >
          Цена (дешовые)
        </Menu.Item>
        <Menu.Item
          active={filterBy === "author"}
          onClick={setFilter.bind(this, 'author')}
        >
          Автор
        </Menu.Item>
        <Menu.Item >
          <Input placeholder='Введите запрос...' icon='search' value={searchQuery} onChange={e => setQuery}/>
        </Menu.Item>
      </Menu>
    </div>
  );

export default Filter;