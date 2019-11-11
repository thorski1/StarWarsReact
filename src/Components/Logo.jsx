import React, { Component } from "react";
import { Image } from "semantic-ui-react";

export default class Logo extends Component {
	render() {
		return (
			<Image
				size="huge"
				src="assets/StarWarsLogo2.png"
				style={{ margin: "auto", padding: "50px" }}
			/>
		);
	}
}
