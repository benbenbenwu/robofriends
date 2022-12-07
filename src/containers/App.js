import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from '../components/SearchBox'
import Scroll from "../components/Scroll";
// import { robots } from './robots'

class App extends Component {

  constructor() {
    super()
    this.state = {
      robots: [],
      searchFiled: ''
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(users => this.setState({ robots: users }))
  }

  onSearchChange = (event) => {
    this.setState({ searchFiled: event.target.value })

  }

  render() {
    const { robots, searchFiled } = this.state
    const filterRobots = robots.filter(robot => robot.name.toLowerCase().includes(searchFiled.toLowerCase()))

    return !robots.length ? <h1 className="tc f1">Loading</h1>
      : (
        <div className="tc">
          <h1 className="f1">RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <CardList robots={filterRobots} />
          </Scroll>
        </div>
      )

  };
}

export default App;
