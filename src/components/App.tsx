import React from "react";
import { connect } from "react-redux";
import { Service, fetchServices } from "../actions";
import { StoreState } from "../reducers";

interface AppProps {
  services: Service[];
  fetchServices(): any;
}

class _App extends React.Component<AppProps> {
  componentDidMount() {
    this.props.fetchServices();
  }

  renderList(): JSX.Element[] | null {
    if (!this.props.services) {
      return null;
    }
    return this.props.services.map((service: Service) => {
      return <div key={service.id}>{service.name}</div>;
    });
  }
  render() {
    return <div>{this.renderList()}</div>;
  }
}

const mapStateToProps = (state: StoreState): { services: Service[] } => {
  return { services: state.services };
};

export const App = connect(mapStateToProps, { fetchServices })(_App);
