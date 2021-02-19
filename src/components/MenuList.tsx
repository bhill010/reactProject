import React from "react";
import { Service } from "../actions";
import { MenuItem } from "./MenuItem";
import { CycleHire } from "./CycleHire";

interface MenuListProps {
  services: Service[];
  onServiceSelect(service: Service): void;
  onBikeSearch(searchTerm: string): void;
  onBikeSearchTerm(searchTerm: string): void;
  onBikeSwitch(update: boolean): void;
}

export const MenuList: React.FC<MenuListProps> = ({
  services,
  onServiceSelect,
  onBikeSearch,
  onBikeSearchTerm,
  onBikeSwitch,
}) => {
  return (
    <div className="menu-list-container">
      <div className="ui relaxed divided list">
        {renderList(services, onServiceSelect, onBikeSwitch)}
      </div>
      <div className="item">
        <CycleHire
          onBikeSearch={onBikeSearch}
          onBikeSearchTerm={onBikeSearchTerm}
          onBikeSwitch={onBikeSwitch}
        />
      </div>
    </div>
  );
};

const renderList = (
  services: Service[],
  onServiceSelect: (service: Service) => void,
  onBikeSwitch: (update: boolean) => void
): JSX.Element[] => {
  return services.map((service: Service) => {
    return (
      <MenuItem
        onServiceSelect={onServiceSelect}
        key={service.id}
        service={service}
        onBikeSwitch={onBikeSwitch}
      />
    );
  });
};
