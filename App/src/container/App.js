import React, { Component } from "react";
import CardList from "../components/CardList";
import Search from "../components/Search";
import "./App.css";
import Scrl from "../components/Scrl";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      Searchfield: "",
    };
  }
  componentDidMount() {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        this.setState({ robots: users });
      });
  }

  onSearchChange = (event) => {
    this.setState({ Searchfield: event.target.value });
  };

  render() {
    const filteredRobots = this.state.robots.filter((robots) => {
      return robots.name
        .toLowerCase()
        .includes(this.state.Searchfield.toLowerCase());
    });
    if (this.state.robots.length === 0) {
      return <h1>LOADING</h1>;
    } else {
      return (
        <div className="tc">
          <h1 className="f1">ROBOFRIENDS</h1>
          <Search searchChange={this.onSearchChange} />
          <Scrl>
            <CardList robots={filteredRobots} />
          </Scrl>
        </div>
      );
    }
  }
}

export default App;
