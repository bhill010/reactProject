import React from "react";
import { connect } from "react-redux";
import { Service, fetchServices } from "../actions";
import { StoreState } from "../reducers";
import { MenuItem } from "./MenuItem";

interface MenuListProps {
  services: Service[];
}

export const MenuList: React.FC<MenuListProps> = ({ services }) => {
  return <div>{renderList(services)}</div>;
};

const renderList = (services: Service[]): JSX.Element[] => {
  return services.map((service: Service) => {
    return <MenuItem key={service.id} service={service} />;
  });
};
