import React from "react";
import { connect } from "react-redux";
import { Service, fetchServices, fetchSelectedService } from "../actions";
import { StoreState } from "../reducers";
import { MenuList } from "./MenuList";
import { Main } from "./Main";

interface AppProps {
  services: Service[];
  selectedService: Service;
  fetchServices(): any;
  fetchSelectedService(service: Service): any;
}

class _App extends React.Component<AppProps> {
  componentDidMount() {
    this.props.fetchServices();
  }

  orderServiceList(services: Service[]): Service[] {
    if (!services) {
      return [];
    }

    return services
      .sort((a: Service, b: Service) => (a.name < b.name ? 1 : -1))
      .sort((a: Service, b: Service) => (a.modeName > b.modeName ? 1 : -1));
  }

  render() {
    return (
      <div>
        <MenuList services={this.orderServiceList(this.props.services)} />
        <Main />
      </div>
    );
  }
}

const mapStateToProps = (
  state: StoreState
): { services: Service[]; selectedService: Service } => {
  return { services: state.services, selectedService: state.selectedService };
};

export const App = connect(mapStateToProps, {
  fetchServices,
  fetchSelectedService,
})(_App);
