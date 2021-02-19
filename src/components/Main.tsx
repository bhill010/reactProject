import React from "react";
import { connect } from "react-redux";
import { Service, fetchServices } from "../actions";
import { StoreState } from "../reducers";

interface MainProps {
  selectedService: Service;
}

export const Main: React.FC<MainProps> = ({ selectedService }) => {
  return (
    <div>
      <div>==========================</div>
      <div>==========================</div>
      <div>{serviceStatusHeader(selectedService)}</div>
      <div>{serviceStatusSubHeader(selectedService)}</div>
      <div>{selectedService.name}</div>
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
    .map((selectedService) => {
      return <li>{selectedService.reason}</li>;
    });
};
