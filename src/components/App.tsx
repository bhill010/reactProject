import React from "react";
import { connect } from "react-redux";
import {
  Service,
  BikePoint,
  fetchServices,
  fetchSelectedService,
  fetchBikePoints,
} from "../actions";
import { StoreState } from "../reducers";
import { MenuList } from "./MenuList";
import { Main } from "./Main";

interface AppProps {
  services: Service[];
  selectedService: Service;
  bikePoints: BikePoint[];
  fetchServices(): any;
  fetchSelectedService(service: Service): any;
  fetchBikePoints(searchTerm: string): any;
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

  onServiceSelect = (selectedService: Service): void => {
    this.props.fetchSelectedService(selectedService);
  };

  onBikeSearch = (searchTerm: string): void => {
    console.log(searchTerm, "searchTerm");
    //this.props.fetchBikePoints(searchTerm);
  };

  render() {
    return (
      <div>
        <MenuList
          onServiceSelect={this.onServiceSelect}
          services={this.orderServiceList(this.props.services)}
          onBikeSearch={this.onBikeSearch}
        />
        <Main selectedService={this.props.selectedService} />
      </div>
    );
  }
}

const mapStateToProps = (
  state: StoreState
): {
  services: Service[];
  selectedService: Service;
  bikePoints: BikePoint[];
} => {
  return {
    services: state.services,
    selectedService: state.selectedService,
    bikePoints: state.bikePoints,
  };
};

export const App = connect(mapStateToProps, {
  fetchServices,
  fetchSelectedService,
  fetchBikePoints,
})(_App);
