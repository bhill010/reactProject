import React from "react";
import { connect } from "react-redux";
import { Service, BikePoint } from "../actions";
import { StoreState } from "../reducers";

interface MainProps {
  selectedService: Service;
  bikePoints: BikePoint[];
  searchTerm: string;
}

export const Main: React.FC<MainProps> = ({
  selectedService,
  bikePoints,
  searchTerm,
}) => {
  return (
    <div>
      <div>==========================</div>
      <div>==========================</div>
      <div>{serviceStatusHeader(selectedService)}</div>
      <div>{serviceStatusSubHeader(selectedService)}</div>
      <div>{selectedService.name}</div>
      <div>==========================</div>
      <div>==========================</div>
      <div>{bikePointsList(bikePoints, searchTerm)}</div>
    </div>
  );
};

const serviceStatusHeader = (selectedService: Service): string => {
  let status = "No service disruptions";

  if (!selectedService.lineStatuses.length) {
    return status;
  }

  for (let serviceType of selectedService.lineStatuses) {
    if (serviceType.statusSeverity !== 10) {
      status = "Service currently suffering disruptions";
      return status;
    }
  }

  return status;
};

const serviceStatusSubHeader = (selectedService: Service): JSX.Element[] => {
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
