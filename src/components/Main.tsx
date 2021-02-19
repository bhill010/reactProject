import React from "react";
import { Service, BikePoint } from "../actions";

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
    <div className="main-container">
      {display(bikeSwitch, bikePoints, searchTerm, selectedService)}
    </div>
  );
};

const display = (
  bikeSwitch: boolean,
  bikePoints: BikePoint[],
  searchTerm: string,
  selectedService: Service
): JSX.Element => {
  if (bikeSwitch === true) {
    return (
      <div className="ui relaxed divided list main-container">
        {bikePointsList(bikePoints, searchTerm)}
      </div>
    );
  } else {
    return (
      <div className="main-container">
        <h2 className="ui header">{serviceStatusHeader(selectedService)}</h2>
        <div className="ui relaxed divided list">
          {serviceStatusSubHeader(selectedService)}
        </div>
      </div>
    );
  }
};

// A header showing “No service disruptions” if no object in the lineStatuses array has a
// statusSeverity value different than 10; or A header showing “Service currently suffering disruptions”, followed by a list of every current
// disruption’s description, extracted from the reason value on each object inside the lineStatuses
// array with a statusSeverity value different than 10.

const serviceStatusHeader = (selectedService: Service): string => {
  if (selectedService.id === "") {
    return "";
  }
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

const serviceStatusSubHeader = (
  selectedService: Service
): JSX.Element[] | JSX.Element => {
  if (selectedService.id === "") {
    return <div></div>;
  }
  return selectedService.lineStatuses
    .filter((selectedService) => selectedService.statusSeverity !== 10)
    .map((selectedService, idx) => {
      return (
        <div className="item" key={idx}>
          {selectedService.reason}
        </div>
      );
    });
};

// Display the results as a list, showing the id of the bike point (digits on the end of the id value)
// followed by its commonName value and then by its coordinates inside a (). If the api returns an empty array,
// display a header showing “No bike points found for ‘X’”, where X is the search term used;
const bikePointsList = (
  bikePoints: BikePoint[],
  searchTerm: string
): JSX.Element[] | JSX.Element => {
  if (bikePoints.length === 0) {
    return <div className="item">No bike points found for {searchTerm}</div>;
  }
  return bikePoints.map((bikePoint, idx) => {
    return (
      <div className="item" key={idx}>
        {extractBikeId(bikePoint.id)} {bikePoint.commonName} ({bikePoint.lat},
        {bikePoint.lon})
      </div>
    );
  });
};

const extractBikeId = (stringId: string): string => {
  return stringId.split("_")[1];
};
