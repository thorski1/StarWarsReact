import React, { Component } from "react";
import { Menu, Image } from "semantic-ui-react";
import { Link } from '@reach/router'

export default class MenuExampleStackable extends Component {
	state = {};

	handleItemClick = (e, { name }) =>
		this.setState({ activeItem: name });

	render() {
		const { activeItem } = this.state;

		return (
			<Menu
				stackable
				size="massive"
				inverted
				style={{ backgroundColor: "#F9D71C" }}
			>
				<Link to="/">
					<Menu.Item>
						<Image
							className="menu-icon"
							src="/assets/StarWarsLogo.png"
							size="tiny"
						/>
					</Menu.Item>
				</Link>
				<Link to="/characters">
					<Menu.Item
						name="characters"
						active={activeItem === "characters"}
						onClick={this.handleItemClick}
						className="menu"
						style={{ borderLeft: "1px solid black" }}
					>
						<h1 className="menu">Characters</h1>
					</Menu.Item>
				</Link>
				<Link to="/planets">
					<Menu.Item
						name="planets"
						active={activeItem === "planets"}
						onClick={this.handleItemClick}
						style={{ borderLeft: "1px solid black" }}
					>
						<h1 className="menu">Planets</h1>
					</Menu.Item>
				</Link>
				<Link to="/films">
					<Menu.Item
						name="films"
						active={activeItem === "films"}
						onClick={this.handleItemClick}
						style={{ borderLeft: "1px solid black" }}
					>
						<h1 className="menu">Films</h1>
					</Menu.Item>
				</Link>
				<Link to="/species">
					<Menu.Item
						name="species"
						active={activeItem === "species"}
						onClick={this.handleItemClick}
						style={{ borderLeft: "1px solid black" }}
					>
						<h1 className="menu">Species</h1>
					</Menu.Item>
				</Link>
				<Link to="/starships">
					<Menu.Item
						name="starships"
						active={activeItem === "starships"}
						onClick={this.handleItemClick}
						style={{ borderLeft: "1px solid black" }}
					>
						<h1 className="menu">Starships</h1>
					</Menu.Item>
				</Link>
				<Link to="/vehicles">
					<Menu.Item
						name="vehicles"
						active={activeItem === "vehicles"}
						onClick={this.handleItemClick}
						style={{ borderLeft: "1px solid black", "&:hover": {backgroundColor: "orange"} }}
					>
						<h1 className="menu">Vehicles</h1>
					</Menu.Item>
				</Link>
			</Menu>
		);
	}
}
