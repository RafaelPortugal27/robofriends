import React, { Component } from 'react';
import './App.css';

import Cardlist from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import { robots } from '../robots';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robotlist: robots,
      searchfield: '',
    };
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  }

  render() {
    const { robotlist, searchfield } = this.state;

    const filteredRobots = robotlist.filter(robot => (
      robot.name.toLowerCase().includes(searchfield.toLowerCase())
    ));

    return !robots.length ?
      <h1>Loading</h1> :
      (
        <div className="tc container">
          <div className="head">
            <h1>RoboFriends</h1>
            <SearchBox searchChange={this.onSearchChange} />
          </div>
          <Scroll className="robots">
            <Cardlist robots={filteredRobots} />
          </Scroll>
        </div>
      );
  }
}

export default App;
