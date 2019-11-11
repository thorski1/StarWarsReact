import React, { Component } from "react";
import { Image } from "semantic-ui-react";
import { Animate } from "react-simple-animate";

export default class Logo extends Component {
	render() {
		return (
			<Animate
				play
				duration={1}
				delay={0.3}
				start={{ opacity: 0 }}
				end={{ opacity: 1 }}
			>
				<Image
					size="huge"
					src="assets/StarWarsLogo2.png"
					style={{ margin: "auto", padding: "50px" }}
				/>
			</Animate>
		);
	}
}
