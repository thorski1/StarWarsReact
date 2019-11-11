import React, { Component } from "react";
import {
	Table,
	Header,
	Container,
	Segment
} from "semantic-ui-react";

import Navbar from "../Components/Navbar";

class Characters extends Component {
	constructor(props) {
		super(props);

		this.state = {
			people: []
		};
	}

	componentDidMount() {
		fetch("https://swapi.co/api/people/")
			.then(response => response.json())
			.then(people =>
				this.setState({ people: people.results })
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
							<h1 style={{ color: "black" }}>Characters</h1>
						</Header>
					</Segment>
					<Table celled padded color="yellow">
						<Table.Header>
							<Table.Row textAlign="center">
								<Table.HeaderCell
									singleLine
									style={{
										backgroundColor: "#F9D71C",
										fontSize: "20px"
									}}
								>
									Character Name
								</Table.HeaderCell>
								<Table.HeaderCell
									style={{
										backgroundColor: "#F9D71C",
										fontSize: "20px"
									}}
								>
									Gender
								</Table.HeaderCell>
								<Table.HeaderCell
									style={{
										backgroundColor: "#F9D71C",
										fontSize: "20px"
									}}
								>
									Birth Year
								</Table.HeaderCell>
								<Table.HeaderCell
									style={{
										backgroundColor: "#F9D71C",
										fontSize: "20px"
									}}
								>
									Eye Color
								</Table.HeaderCell>
								<Table.HeaderCell
									style={{
										backgroundColor: "#F9D71C",
										fontSize: "20px"
									}}
								>
									Height
								</Table.HeaderCell>
							</Table.Row>
						</Table.Header>
						<Table.Body textAlign="center">
							{this.state.people.map(character => (
								<Table.Row>
									<Table.Cell
										style={{ backgroundColor: "#F9D71C" }}
									>
										<Header as="h2" textAlign="center">
											{character.name}
										</Header>
									</Table.Cell>
									<Table.Cell textAlign="center">
										{character.gender}
									</Table.Cell>
									<Table.Cell textAlign="center">
										{character.birth_year}
									</Table.Cell>
									<Table.Cell textAlign="center">
										{character.eye_color}
									</Table.Cell>
									<Table.Cell textAlign="center">
										{character.height} inches
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

export default Characters;
