import React from "react";

interface CycleHireProps {
  onBikeSearch(searchTerm: string): void;
  onBikeSearchTerm(searchTerm: string): void;
  onBikeSwitch(update: boolean): void;
}

// A search box where the user can type in any text and have returned bike points that match that
// text search:
export class CycleHire extends React.Component<CycleHireProps> {
  state = { searchTerm: "" };

  onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchTerm: event.target.value });
  };

  onFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    this.props.onBikeSearch(this.state.searchTerm);
    this.props.onBikeSearchTerm(this.state.searchTerm);
    this.props.onBikeSwitch(true);
    this.setState({ searchTerm: "" });
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Cycle Hire</label>
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
