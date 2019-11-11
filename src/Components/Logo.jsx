import React, { Component } from "react";
import { Image } from "semantic-ui-react";

export default class Logo extends Component {
	render() {
		return (
			<Image
				size="big"
				src="assets/StarWarsLogo2.png"
				style={{ margin: "auto", height: "560px"}}
			/>
		);
	}
}
