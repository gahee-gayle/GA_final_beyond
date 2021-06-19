import React, { Component } from 'react';
import { RiSearchLine } from 'react-icons/ri';

class Search extends Component {
  constructor() {
    super();
    this.state = { term: '' };
  }

  onInputChange = (e) => {
    this.setState({ term: e.target.value });
    console.log(e.target.value);
  };

  onInputSubmit = (e) => {
    // e.preventDefault();
    if (e.key === 'Enter') {
      console.log(this.state.term);
    }
    this.props.onTermSubmit(this.state.term);
  };

  onInputClick = () => {
    console.log('clicked');
  };

  render() {
    return (
      <div className="Search">
        <input
          type="text"
          value={this.state.term}
          onChange={this.onInputChange}
          onKeyPress={this.onInputSubmit}
          // onSubmit={this.onInputSubmit}
          onClick={this.onInputClick}
        />
        <RiSearchLine size="1.5em" className="Icon" />
        <div className="SearchItemBox">
          <button className="Active">School</button>
          <button>Major</button>
          <button>Year</button>
        </div>
      </div>
    );
  }
}

export default Search;

//if(this.state.term)
//if(this.state.term.trim()!==" ")
//https://reactjs.org/docs/conditional-rendering.html
//https://stackoverflow.com/questions/27827234/how-to-handle-the-onkeypress-event-in-reactjs
