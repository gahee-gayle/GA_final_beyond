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
      likes: '',
      term: '',
    };
  }

  componentDidMount() {
    // call api
    // this.setState({ portfolioData: portfolioDB });

    const sortedData = portfolioDB.sort((a, b) => (a.likes < b.likes ? 1 : -1));
    this.setState({
      portfolioData: sortedData,
    });
  }

  onInputChange = (e, term) => {
    if (e.key === 'Enter') {
      console.log(this.state.term);
    }

    let filterSchool = portfolioDB;
    filterSchool = filterSchool.filter((portfolio) => {
      return (
        portfolio.school.toLowerCase().search(e.target.value.toLowerCase()) !==
          -1 ||
        portfolio.major.toLowerCase().search(e.target.value.toLowerCase()) !==
          -1 ||
        portfolio.year.toString().search(e.target.value.toLowerCase()) !== -1
      );
    });

    this.setState({
      term: e.target.value,
      portfolioData: filterSchool,
    });
  };

  sortByMostPopular = () => {
    const sortedData = this.state.portfolioData.sort((a, b) =>
      a.likes < b.likes ? 1 : -1
    );
    this.setState({
      portfolioData: sortedData,
    });
  };

  sortByMostRecent = () => {
    const sortedData = this.state.portfolioData.sort((a, b) =>
      a.year < b.year ? 1 : -1
    );
    this.setState({
      portfolioData: sortedData,
    });
  };

  render() {
    return (
      <div className="App">
        <Nav />
        <Search
          onInputChange={this.onInputChange}
          sortByMostPopular={this.sortByMostPopular}
          sortByMostRecent={this.sortByMostRecent}
          term={this.state.term}
        />
        <div className="Card-grid-wrapper">
          {this.state.portfolioData.map((portfolio, id) => (
            <PortfolioCard portfolio={portfolio} key={id} />
          ))}
        </div>
      </div>
    );
  }
}
export default App;
