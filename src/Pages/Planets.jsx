import React, { Component } from "react";
import {
	Table,
	Header,
	Container,
	Segment,
	Divider
} from "semantic-ui-react";
import { Animate } from "react-simple-animate";

import Navbar from "../Components/Navbar";

export default class Planets extends Component {
	constructor(props) {
		super(props);

		this.state = {
			planets: []
		};
	}

	componentDidMount() {
		fetch("https://swapi.co/api/planets/")
			.then(response => response.json())
			.then(planets =>
				this.setState({ planets: planets.results })
			);
	}
	render() {
		return (
			<>
				<Navbar />
				<Container style={{ paddingTop: "20px" }}>
					<Animate
						play
						duration={1}
						delay={0.3}
						start={{ opacity: 0 }}
						end={{ opacity: 1 }}
					>
						<Segment
							padded
							textAlign="center"
							style={{ backgroundColor: "#F9D71C" }}
							inverted
						>
							<Header as="h1">
								<h1 style={{ color: "black" }}>Planets</h1>
							</Header>
						</Segment>
					</Animate>
					<Animate
						play
						duration={1.5}
						delay={1.3}
						start={{ opacity: 0 }}
						end={{ opacity: 1 }}
					>
						<Divider hidden padded />
						<Table celled striped padded color="yellow">
							<Table.Header>
								<Table.Row textAlign="center">
									<Table.HeaderCell
										style={{
											backgroundColor: "#F9D71C",
											fontSize: "20px"
										}}
										singleLine
									>
										Name
									</Table.HeaderCell>
									<Table.HeaderCell
										style={{
											backgroundColor: "#F9D71C",
											fontSize: "20px"
										}}
									>
										Population
									</Table.HeaderCell>
									<Table.HeaderCell
										style={{
											backgroundColor: "#F9D71C",
											fontSize: "20px"
										}}
									>
										Diameter
									</Table.HeaderCell>
									<Table.HeaderCell
										style={{
											backgroundColor: "#F9D71C",
											fontSize: "20px"
										}}
									>
										Climate
									</Table.HeaderCell>
									<Table.HeaderCell
										style={{
											backgroundColor: "#F9D71C",
											fontSize: "20px"
										}}
									>
										Terrain
									</Table.HeaderCell>
								</Table.Row>
							</Table.Header>
							<Table.Body textAlign="center">
								{this.state.planets.map(planet => (
									<Table.Row>
										<Table.Cell
											style={{ backgroundColor: "#F9D71C" }}
										>
											<Header as="h2" textAlign="center">
												{planet.name}
											</Header>
										</Table.Cell>
										<Table.Cell textAlign="center">
											{planet.population}
										</Table.Cell>
										<Table.Cell textAlign="center">
											{planet.diameter}
										</Table.Cell>
										<Table.Cell textAlign="center">
											{planet.climate}
										</Table.Cell>
										<Table.Cell textAlign="center">
											{planet.terrain}
										</Table.Cell>
									</Table.Row>
								))}
							</Table.Body>
						</Table>
					</Animate>
				</Container>
			</>
		);
	}
}
