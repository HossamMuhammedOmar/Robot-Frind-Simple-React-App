import React, { Component } from 'react';
import CardList from './CardList';
import { robots } from './robot';
import SearchBox from './SearchBox';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchfield: '',
    };
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const filterRobo = this.state.robots.filter((robot) => {
      let name = robot.name.toLowerCase();
      return name.includes(this.state.searchfield.toLowerCase());
    });
    return (
      <div>
        <div className="content-search">
          <h1>Robo Friends</h1>
          <SearchBox searchChange={this.onSearchChange} />
        </div>
        <CardList robots={filterRobo} />
      </div>
    );
  }
}

export default App;
