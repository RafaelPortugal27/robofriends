import React, { useState, useEffect } from 'react';
import './App.css';
import Cardlist from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import { robots } from '../robots';

const App = () => {

  const [robotlist, setRobotlist] = useState([]);
  const [searchfield, setSearchfield] = useState('');

  useEffect(() => {
    setRobotlist(robots);
  }, []);

  const onSearchChange = (event) => setSearchfield(event.target.value);

  const filteredRobots = robotlist.filter(robot => (
    robot.name.toLowerCase().includes(searchfield.toLowerCase())
  ));

  return !robots.length ?
    <h1>Loading</h1> :
    (
      <div className="tc container">
        <div className="head">
          <h1>RoboFriends</h1>
          <SearchBox searchChange={onSearchChange} />
        </div>
        <Scroll className="robots">
          <Cardlist robots={filteredRobots} />
        </Scroll>
      </div>
    );
};

export default App;
