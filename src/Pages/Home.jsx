import React from "react";
import { Container, Grid } from "semantic-ui-react";

import { Columns } from "../Components/Home.Columns";
import Logo from "../Components/Logo";

export const Home = props => (
	<Container className="container">
		<Logo />
		<Grid centered columns={3} stackable>
			
			<Columns {...props} />
		</Grid>
	</Container>
);
