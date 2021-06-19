import './App.css';
import React, { Component } from 'react';
import Nav from './components/Nav';
import Search from './components/Search';
import PortfolioCard from './components/PortfolioCard';
import portfolioDB from './DB/portfolioDB';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      mainImg: '',
      name: '',
      school: '',
      major: '',
      year: 2020,
      Portfolio: [{ img: [], desc: '' }],
    };
  }

  onTermSubmit = (term) => {
    //search term
    console.log(term);
  };

  render() {
    return (
      <div className="App">
        <Nav />
        <Search onTermSubmit={this.onTermSubmit} />
        <div className="Card-grid-wrapper">
          {portfolioDB.map((portfolio) => (
            <PortfolioCard portfolio={portfolio} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
