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
      <div>===============</div>
      <div>{selectedService.name}</div>
    </div>
  );
};
