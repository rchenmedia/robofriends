import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots'; //not default, need to destructure
import './App.css'


class App extends Component {
		constructor() {
			super()
			this.state = {
					robots: robots,  //original robots array, that will be filtered by the function
					searchfield: '' //updates according to this.setState, which allows filterRobots to work
					}

			this.onSearchChange = this.onSearchChange.bind(this);
		}

			onSearchChange(event){   //madeup function - arrow function makes 'this' refer to the correct obj
					this.setState({searchfield: event.target.value})  //changes state to match input value
			};



			render() {
					const filteredRobotsArray = this.state.robots.filter(robot => {
				 			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
				 })

					return (
							<div className= 'tc'>
									<h1 className="f2">RoboFriends</h1>
									<SearchBox searchChange={this.onSearchChange}/>
									<CardList robots={filteredRobotsArray} />
							</div>
					 );
			}
	}
export default App;
