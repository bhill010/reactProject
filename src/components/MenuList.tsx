import React from "react";
import { connect } from "react-redux";
import { Service, fetchServices } from "../actions";
import { StoreState } from "../reducers";
import { MenuItem } from "./MenuItem";
import { CycleHire } from "./CycleHire";

interface MenuListProps {
  services: Service[];
  onServiceSelect: any;
  onBikeSearch: any;
  onBikeSearchTerm: any;
}

export const MenuList: React.FC<MenuListProps> = ({
  services,
  onServiceSelect,
  onBikeSearch,
  onBikeSearchTerm,
}) => {
  return (
    <div>
      {renderList(services, onServiceSelect)}
      <div className="ui container">
        <CycleHire
          onBikeSearch={onBikeSearch}
          onBikeSearchTerm={onBikeSearchTerm}
        />
      </div>
    </div>
  );
};

const renderList = (
  services: Service[],
  onServiceSelect: any
): JSX.Element[] => {
  return services.map((service: Service) => {
    return (
      <MenuItem
        onServiceSelect={onServiceSelect}
        key={service.id}
        service={service}
      />
    );
  });
};
