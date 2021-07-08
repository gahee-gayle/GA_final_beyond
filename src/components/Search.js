import React, { Component } from 'react';
import { RiSearchLine } from 'react-icons/ri';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSearchIcon: true,
    };
  }
  onInputClick = () => {
    this.setState({ showSearchIcon: false });
  };

  render() {
    return (
      <div className="Search">
        <input
          type="text"
          value={this.props.term}
          onChange={this.props.onInputChange}
          onKeyPress={this.props.onInputChange}
          onClick={this.onInputClick}
          placeholder="Search portfolios by school, major or year"
        />
        {this.state.showSearchIcon ? (
          <RiSearchLine size="1.5em" className="Icon" />
        ) : null}

        <div className="SearchItemBox">
          <button
            onClick={() => {
              this.props.sortByMostPopular();
            }}
            className=""
          >
            Most Popular
          </button>

          <button
            onClick={() => {
              this.props.sortByMostRecent();
            }}
          >
            Most Recent
          </button>
        </div>
      </div>
    );
  }
}
export default Search;
