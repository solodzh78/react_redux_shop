import React, { Component } from "react";
import { Menu } from "semantic-ui-react";

export default class MenuBasic extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu>
        <Menu.Item
          name="editorials"
          active={activeItem === "editorials"}
          onClick={this.handleItemClick}          
        >
          Магазин книг
        </Menu.Item>

        <Menu.Item
          position='right'
          name="reviews"
          active={activeItem === "reviews"}
          onClick={this.handleItemClick}
        >
          Итого: &nbsp; <b>0</b> &nbsp; руб.
        </Menu.Item>

        <Menu.Item
          name="upcomingEvents"
          active={activeItem === "upcomingEvents"}
          onClick={this.handleItemClick}
        >
          Корзина <b>(0)</b>
        </Menu.Item>
      </Menu>
    );
  }
}
