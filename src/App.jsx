import React, { Component } from "react";
import './App.css'
import { Home } from "./Pages/Home";
import Navbar from './Components/Navbar'

class App extends Component {

	render() {
		return (
			<>
				<Navbar />
				<Home />
				</>
		);
	}
}
export default App;
