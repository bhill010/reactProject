import React from "react";
import { Service } from "../actions";

interface MenuItemProps {
  service: Service;
  onServiceSelect(service: Service): void;
  onBikeSwitch(update: boolean): void;
}

export const MenuItem: React.FC<MenuItemProps> = ({
  service,
  onServiceSelect,
  onBikeSwitch,
}) => {
  return (
    <div
      onClick={() => {
        onServiceSelect(service);
        onBikeSwitch(false);
      }}
      className="item"
    >
      <h4 className="bold ui h4">{service.name}</h4>
      <span>{isNightService(service)}</span>
      <span>{isServiceDisrupted(service)}</span>
    </div>
  );
};

// Next to the name you should see a visual cue if the services is currently facing disruptions.
const isServiceDisrupted = (service: Service): string => {
  let isServiceDisrupted = "";

  if (!service.lineStatuses.length) {
    return isServiceDisrupted;
  }

  for (let serviceType of service.lineStatuses) {
    if (serviceType.statusSeverity !== 10) {
      isServiceDisrupted = " | Disruption";
      return isServiceDisrupted;
    }
  }

  return isServiceDisrupted;
};

//Next to the name you should see a visual cue (an icon, or text) if the services operates in the
//evenings.
const isNightService = (service: Service): string => {
  let isNightService = "";

  if (!service.serviceTypes.length) {
    return isNightService;
  }

  for (let serviceType of service.serviceTypes) {
    if (serviceType.name === "Night") {
      isNightService = " | Night";
      return isNightService;
    }
  }

  return isNightService;
};
