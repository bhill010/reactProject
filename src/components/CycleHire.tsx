import React from "react";
import { connect } from "react-redux";
import { Service, fetchServices } from "../actions";
import { StoreState } from "../reducers";
import { MenuItem } from "./MenuItem";

interface CycleHireProps {
  onBikeSearch: any;
}

export class CycleHire extends React.Component<CycleHireProps> {
  state = { searchTerm: "" };

  onInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ searchTerm: event.target.value });
  }

  onFormSubmit(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();

    this.props.onBikeSearch(this.state.searchTerm);
  }

  render() {
    return <div>Cycle Hire</div>;
  }
}
