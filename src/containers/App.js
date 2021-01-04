import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Cardlist from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import { requestRobots, setSearchfield } from '../actions';

const mapStateToProps = state => ({
  searchfield: state.searchRobots.searchfield,
  robots: state.requestRobots.robots,
  isPending: state.requestRobots.isPending,
  error: state.requestRobots.error,
});
const mapDispatchToProps = (dispach) => ({
  onSearchChange: (event) => dispach(setSearchfield(event.target.value)),
  onRequestRobots: () => dispach(requestRobots()) }
);

class App extends Component {

  componentDidMount() {
    // eslint-disable-next-line react/prop-types
    const { onRequestRobots } = this.props;
    onRequestRobots();
  }

  render() {
    // eslint-disable-next-line react/prop-types
    const { searchfield, onSearchChange, robots, isPending } = this.props;

    // eslint-disable-next-line react/prop-types
    const filteredRobots = robots.filter(robot => (
      // eslint-disable-next-line react/prop-types
      robot.name.toLowerCase().includes(searchfield.toLowerCase())
    ));

    // eslint-disable-next-line react/prop-types
    return isPending ?
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
