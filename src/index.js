import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Router} from '@reach/router'
import * as serviceWorker from './serviceWorker';
import Characters from './Pages/Characters';
import Films from './Pages/Films';
import Planets from './Pages/Planets';
import Species from './Pages/Species';
import Starships from './Pages/Starships';
import Vehicles from './Pages/Vehicles';

ReactDOM.render(
	<Router>
		<App path="/" />
		<Characters path="characters" />
		<Films path="films" />
		<Planets path="planets" />
		<Species path="species" />
		<Starships path="starships" />
		<Vehicles path="vehicles" />
	</Router>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
