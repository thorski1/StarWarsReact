import React, { Component } from "react";
import {
	Table,
	Header,
	Container,
	Segment,
	Rating,
	Divider
} from "semantic-ui-react";
import { Animate } from "react-simple-animate";

import Navbar from "../Components/Navbar";

export default class Starships extends Component {
	constructor(props) {
		super(props);

		this.state = {
			starships: []
		};
	}

	componentDidMount() {
		fetch("https://swapi.co/api/starships/")
			.then(response => response.json())
			.then(starships =>
				this.setState({ starships: starships.results })
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
								<h1 style={{ color: "black" }}>
									Starships
								</h1>
							</Header>
						</Segment>
					</Animate>
					<Divider hidden padded />
					<Animate
						play
						duration={1.5}
						delay={1.3}
						start={{ opacity: 0 }}
						end={{ opacity: 1 }}
					>
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
										Model
									</Table.HeaderCell>
									<Table.HeaderCell
										style={{
											backgroundColor: "#F9D71C",
											fontSize: "20px"
										}}
									>
										Starship Class
									</Table.HeaderCell>
									<Table.HeaderCell
										style={{
											backgroundColor: "#F9D71C",
											fontSize: "20px"
										}}
									>
										Cost in Credits
									</Table.HeaderCell>
									<Table.HeaderCell
										style={{
											backgroundColor: "#F9D71C",
											fontSize: "20px"
										}}
									>
										Hyperdrive Rating
									</Table.HeaderCell>
								</Table.Row>
							</Table.Header>
							<Table.Body textAlign="center">
								{this.state.starships.map(starship => (
									<Table.Row>
										<Table.Cell
											style={{ backgroundColor: "#F9D71C" }}
										>
											<Header as="h2" textAlign="center">
												{starship.name}
											</Header>
										</Table.Cell>
										<Table.Cell textAlign="center">
											{starship.model}
										</Table.Cell>
										<Table.Cell textAlign="center">
											{starship.starship_class}
										</Table.Cell>
										<Table.Cell textAlign="center">
											{starship.cost_in_credits}
										</Table.Cell>
										<Table.Cell textAlign="center">
											<Rating
												icon="star"
												defaultRating={
													starship.hyperdrive_rating
												}
												maxRating={5}
											/>
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
