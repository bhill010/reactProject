import React from "react";
import { connect } from "react-redux";
import { Service, fetchServices } from "../actions";
import { StoreState } from "../reducers";
import { MenuList } from "./MenuList";
import { Main } from "./Main";

export class App extends React.Component {
  render() {
    return (
      <div>
        <MenuList />
        <Main />
      </div>
    );
  }
}
