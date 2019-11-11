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

export default class Films extends Component {
	constructor(props) {
		super(props);

		this.state = {
			films: []
		};
	}

	componentDidMount() {
		fetch("https://swapi.co/api/films/")
			.then(response => response.json())
			.then(films =>
				this.setState({ films: films.results })
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
								<h1 style={{ color: "black" }}>Films</h1>
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
										Title
									</Table.HeaderCell>
									<Table.HeaderCell
										style={{
											backgroundColor: "#F9D71C",
											fontSize: "20px"
										}}
									>
										Episode Number
									</Table.HeaderCell>
									<Table.HeaderCell
										style={{
											backgroundColor: "#F9D71C",
											fontSize: "20px"
										}}
									>
										Release Date
									</Table.HeaderCell>
									<Table.HeaderCell
										style={{
											backgroundColor: "#F9D71C",
											fontSize: "20px"
										}}
									>
										Director
									</Table.HeaderCell>
									<Table.HeaderCell
										style={{
											backgroundColor: "#F9D71C",
											fontSize: "20px"
										}}
									>
										Opening Crawl
									</Table.HeaderCell>
								</Table.Row>
							</Table.Header>
							<Table.Body textAlign="center">
								{this.state.films.map(film => (
									<Table.Row>
										<Table.Cell
											style={{ backgroundColor: "#F9D71C" }}
										>
											<Header as="h2" textAlign="center">
												{film.title}
											</Header>
										</Table.Cell>
										<Table.Cell textAlign="center">
											{film.episode_id}
										</Table.Cell>
										<Table.Cell textAlign="center">
											{film.release_date}
										</Table.Cell>
										<Table.Cell textAlign="center">
											{film.director}
										</Table.Cell>
										<Table.Cell textAlign="center">
											{film.opening_crawl}
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
