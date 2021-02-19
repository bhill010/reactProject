import React from "react";
import { connect } from "react-redux";
import { Service, fetchServices } from "../actions";
import { StoreState } from "../reducers";
import { MenuItem } from "./MenuItem";

interface CycleHireProps {
  onBikeSearch: any;
  onBikeSearchTerm: any;
}

export class CycleHire extends React.Component<CycleHireProps> {
  state = { searchTerm: "" };

  onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchTerm: event.target.value });
  };

  onFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    this.props.onBikeSearch(this.state.searchTerm);
    this.props.onBikeSearchTerm(this.state.searchTerm);
    this.setState({ searchTerm: "" });
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Bike Point Search</label>
            <input
              type="text"
              value={this.state.searchTerm}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}
