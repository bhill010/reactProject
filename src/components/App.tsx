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

  orderList(services: Service[]): Service[] {
    if (!services) {
      return [];
    }

    return services
      .sort((a: Service, b: Service) => (a.name < b.name ? 1 : -1))
      .sort((a: Service, b: Service) => (a.modeName > b.modeName ? 1 : -1));
  }

  renderList(): JSX.Element[] | null {
    if (!this.props.services) {
      return null;
    }
    const sortedServices = this.orderList(this.props.services);
    return sortedServices.map((service: Service) => {
      return (
        <div key={service.id}>
          {service.name}
          <span>| {service.modeName}</span>
        </div>
      );
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
