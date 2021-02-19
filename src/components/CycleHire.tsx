import React from "react";
import { connect } from "react-redux";
import { Service, fetchServices } from "../actions";
import { StoreState } from "../reducers";
import { MenuItem } from "./MenuItem";

interface CycleHireProps {
  services: Service[];
  onServiceSelect: any;
}

export const CycleHire: React.FC<CycleHireProps> = ({
  services,
  onServiceSelect,
}) => {
  return <div>Cycle Hire</div>;
};
