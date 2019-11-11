import React, { Component } from "react";
import {
	Table,
	Header,
	Container,
	Segment
} from "semantic-ui-react";

import Navbar from "../Components/Navbar";

export default class Vehicles extends Component {
	constructor(props) {
		super(props);

		this.state = {
			vehicles: []
		};
	}

	componentDidMount() {
		fetch("https://swapi.co/api/vehicles/")
			.then(response => response.json())
			.then(vehicles =>
				this.setState({ vehicles: vehicles.results })
			);
	}
	render() {
		return (
			<>
				<Navbar />
				<div>
					<Container style={{ paddingTop: "20px" }}>
						<Segment
							padded
							textAlign="center"
							style={{
								backgroundColor: "#F9D71C"
							}}
							inverted
						>
							<Header as="h1">
								<h1
									style={{
										color: "black"
									}}
								>
									Vehicles
								</h1>
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
										Model
									</Table.HeaderCell>
									<Table.HeaderCell
										style={{
											backgroundColor: "#F9D71C",
											fontSize: "20px"
										}}
									>
										Vehicle Class
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
										Manufacturer
									</Table.HeaderCell>
								</Table.Row>
							</Table.Header>
							<Table.Body textAlign="center">
								{this.state.vehicles.map(vehicle => (
									<Table.Row>
										<Table.Cell
											style={{
												backgroundColor: "#F9D71C"
											}}
										>
											<Header as="h2" textAlign="center">
												{vehicle.name}
											</Header>
										</Table.Cell>
										<Table.Cell textAlign="center">
											{vehicle.model}
										</Table.Cell>
										<Table.Cell textAlign="center">
											{vehicle.vehicle_class}
										</Table.Cell>
										<Table.Cell textAlign="center">
											{vehicle.cost_in_credits}
										</Table.Cell>
										<Table.Cell textAlign="center">
											{vehicle.manufacturer}
										</Table.Cell>
									</Table.Row>
								))}
							</Table.Body>
						</Table>
					</Container>
				</div>
			</>
		);
	}
}
