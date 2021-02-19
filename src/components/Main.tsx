import React from "react";
import { connect } from "react-redux";
import { Service, BikePoint } from "../actions";
import { StoreState } from "../reducers";

interface MainProps {
  selectedService: Service;
  bikePoints: BikePoint[];
  searchTerm: string;
  bikeSwitch: boolean;
}

export const Main: React.FC<MainProps> = ({
  selectedService,
  bikePoints,
  searchTerm,
  bikeSwitch,
}) => {
  return (
    <div>{display(bikeSwitch, bikePoints, searchTerm, selectedService)}</div>
  );
};

const display = (
  bikeSwitch: boolean,
  bikePoints: BikePoint[],
  searchTerm: string,
  selectedService: Service
): JSX.Element => {
  if (bikeSwitch === true) {
    return <div>{bikePointsList(bikePoints, searchTerm)}</div>;
  } else {
    return (
      <div>
        <div>{serviceStatusHeader(selectedService)}</div>
        <div>{serviceStatusSubHeader(selectedService)}</div>
      </div>
    );
  }
};

const serviceStatusHeader = (selectedService: Service): string => {
  if (selectedService.id === "") {
    return "";
  }
  let status = "No service disruptions";

  if (!selectedService.lineStatuses.length) {
    return status;
  }

  for (let serviceType of selectedService.lineStatuses) {
    console.log(serviceType, "serviceType");
    if (serviceType.statusSeverity !== 10) {
      status = "Service currently suffering disruptions";
      return status;
    }
  }

  return status;
};

const serviceStatusSubHeader = (
  selectedService: Service
): JSX.Element[] | JSX.Element => {
  if (selectedService.id === "") {
    return <div></div>;
  }
  return selectedService.lineStatuses
    .filter((selectedService) => selectedService.statusSeverity !== 10)
    .map((selectedService, idx) => {
      return <li key={idx}>{selectedService.reason}</li>;
    });
};

const bikePointsList = (
  bikePoints: BikePoint[],
  searchTerm: string
): JSX.Element[] | JSX.Element => {
  if (bikePoints.length === 0) {
    return <div>No bike points found for {searchTerm}</div>;
  }
  return bikePoints.map((bikePoint, idx) => {
    return (
      <div key={idx}>
        <li key={idx}>
          {extractBikeId(bikePoint.id)} {bikePoint.commonName} ({bikePoint.lat},
          {bikePoint.lon})
        </li>
      </div>
    );
  });
};

const extractBikeId = (stringId: string): string => {
  return stringId.split("_")[1];
};
