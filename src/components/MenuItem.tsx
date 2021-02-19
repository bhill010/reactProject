import React from "react";
import { Service } from "../actions";

interface MenuItemProps {
  service: Service;
  onServiceSelect: any;
}

export const MenuItem: React.FC<MenuItemProps> = ({
  service,
  onServiceSelect,
}) => {
  return (
    <div onClick={() => onServiceSelect(service)}>
      {service.name}
      <span>{isNightService(service)}</span>
      <span>{isServiceDisrupted(service)}</span>
    </div>
  );
};

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
