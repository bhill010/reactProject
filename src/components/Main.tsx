import React from "react";
import { connect } from "react-redux";
import { Service, fetchServices } from "../actions";
import { StoreState } from "../reducers";

interface AppProps {
  services: Service[];
  fetchServices(): any;
}

class _Main extends React.Component<AppProps> {
  render() {
    return (
      <div>
        <div>===============</div>
        <div>Main Content</div>
      </div>
    );
  }
}

const mapStateToProps = (state: StoreState): { services: Service[] } => {
  return { services: state.services };
};

export const Main = connect(mapStateToProps, { fetchServices })(_Main);
