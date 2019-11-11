import React, { Component } from "react";
import {
	Table,
	Header,
	Container,
	Segment
} from "semantic-ui-react";

import Navbar from "../Components/Navbar";

export default class Species extends Component {
	constructor(props) {
		super(props);

		this.state = {
			species: []
		};
	}

	componentDidMount() {
		fetch("https://swapi.co/api/species/")
			.then(response => response.json())
			.then(species =>
				this.setState({ species: species.results })
			);
	}
	render() {
		return (
			<>
				<Navbar />
				<Container style={{ paddingTop: "20px" }}>
					<Segment
						padded
						textAlign="center"
						style={{ backgroundColor: "#F9D71C" }}
						inverted
					>
						<Header as="h1">
							<h1 style={{ color: "black" }}>Species</h1>
						</Header>
					</Segment>
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
									Classification
								</Table.HeaderCell>
								<Table.HeaderCell
									style={{
										backgroundColor: "#F9D71C",
										fontSize: "20px"
									}}
								>
									Designation
								</Table.HeaderCell>
								<Table.HeaderCell
									style={{
										backgroundColor: "#F9D71C",
										fontSize: "20px"
									}}
								>
									Language
								</Table.HeaderCell>
								<Table.HeaderCell
									style={{
										backgroundColor: "#F9D71C",
										fontSize: "20px"
									}}
								>
									Average Lifespan
								</Table.HeaderCell>
							</Table.Row>
						</Table.Header>
						<Table.Body textAlign="center">
							{this.state.species.map(specie => (
								<Table.Row>
									<Table.Cell
										style={{ backgroundColor: "#F9D71C" }}
									>
										<Header as="h2" textAlign="center">
											{specie.name}
										</Header>
									</Table.Cell>
									<Table.Cell textAlign="center">
										{specie.classification}
									</Table.Cell>
									<Table.Cell textAlign="center">
										{specie.designation}
									</Table.Cell>
									<Table.Cell textAlign="center">
										{specie.language}
									</Table.Cell>
									<Table.Cell textAlign="center">
										{`${specie.average_lifespan} ${
											specie.average_lifespan === "unknown"
												? ""
												: "years"
										}`}
									</Table.Cell>
								</Table.Row>
							))}
						</Table.Body>
					</Table>
				</Container>
			</>
		);
	}
}
