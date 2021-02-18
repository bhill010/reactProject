import React from "react";
import { connect } from "react-redux";
import { Service, fetchServices } from "../actions";
import { StoreState } from "../reducers";

interface AppProps {
  services: Service[];
  fetchServices(): any;
}

class _App extends React.Component<AppProps> {
  render() {
    return <div>Hi there!</div>;
  }
}

const mapStateToProps = (state: StoreState): { services: Service[] } => {
  return { services: state.services };
};

export const App = connect(mapStateToProps, { fetchServices })(_App);
