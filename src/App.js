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
      portfolioData: [],
      Portfolio: [{ img: [], desc: '' }],
    };
  }

  componentDidMount() {
    // call api
    this.setState({ portfolioData: portfolioDB });
  }

  onTermSubmit = (term) => {
    let filterSchool = this.state.portfolioData;
    filterSchool = filterSchool.filter((portfolio) => {
      return portfolio.school.toLowerCase().search(term.toLowerCase()) !== -1;
    });

    this.setState({ portfolioData: filterSchool });
  };

  render() {
    return (
      <div className="App">
        <Nav />
        <Search
          onTermSubmit={this.onTermSubmit}
          // portfolioDB={this.state.portfolioDB}
        />
        <div className="Card-grid-wrapper">
          {this.state.portfolioData.map((portfolio) => (
            <PortfolioCard portfolio={portfolio} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
