import React from "react";
import { connect } from "react-redux";
import {
  Service,
  BikePoint,
  fetchServices,
  fetchSelectedService,
  fetchBikePoints,
  fetchSearchTerm,
  updateBikeSwitch,
} from "../actions";
import { StoreState } from "../reducers";
import { MenuList } from "./MenuList";
import { Main } from "./Main";
import "../styling/App.css";

interface AppProps {
  services: Service[];
  selectedService: Service;
  bikePoints: BikePoint[];
  searchTerm: string;
  bikeSwitch: boolean;
  fetchServices(): void;
  fetchSelectedService(service: Service): void;
  fetchBikePoints(searchTerm: string): void;
  fetchSearchTerm(searchTerm: string): void;
  updateBikeSwitch(update: boolean): void;
}

// Main class within app responsible for fetching data from store and passing to child components
class _App extends React.Component<AppProps> {
  componentDidMount() {
    this.props.fetchServices();
  }

  // The menu text should equal the name value of the service object returned from the api. The
  //menu items should be ordered by modeName first, and then by name;
  orderServiceList = (services: Service[]): Service[] => {
    if (!services) {
      return [];
    }

    return services
      .sort((a: Service, b: Service) => (a.name < b.name ? 1 : -1))
      .sort((a: Service, b: Service) => (a.modeName > b.modeName ? 1 : -1));
  };

  onServiceSelect = (selectedService: Service): void => {
    this.props.fetchSelectedService(selectedService);
  };

  onBikeSearch = (searchTerm: string): void => {
    this.props.fetchBikePoints(searchTerm);
  };

  onBikeSearchTerm = (searchTerm: string): void => {
    this.props.fetchSearchTerm(searchTerm);
  };

  onBikeSwitch = (update: boolean): void => {
    this.props.updateBikeSwitch(update);
  };

  render() {
    return (
      <div className="app-parent-container">
        <MenuList
          onServiceSelect={this.onServiceSelect}
          services={this.orderServiceList(this.props.services)}
          onBikeSearch={this.onBikeSearch}
          onBikeSearchTerm={this.onBikeSearchTerm}
          onBikeSwitch={this.onBikeSwitch}
        />
        <Main
          selectedService={this.props.selectedService}
          bikePoints={this.props.bikePoints}
          searchTerm={this.props.searchTerm}
          bikeSwitch={this.props.bikeSwitch}
        />
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
  searchTerm: string;
  bikeSwitch: boolean;
} => {
  return {
    services: state.services,
    selectedService: state.selectedService,
    bikePoints: state.bikePoints,
    searchTerm: state.searchTerm,
    bikeSwitch: state.bikeSwitch,
  };
};

export const App = connect(mapStateToProps, {
  fetchServices,
  fetchSelectedService,
  fetchBikePoints,
  fetchSearchTerm,
  updateBikeSwitch,
})(_App);
