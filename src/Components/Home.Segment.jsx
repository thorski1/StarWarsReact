import React from "react";
import { Segment, Header, Image } from "semantic-ui-react";

const square = {
	width: 375,
	height: 375,
	backgroundColor: "#F9D71C"
};

const imgSize = { width: 300, height: 300, border: "4px solid black" };

const headerStyle = { color: "black", fontWeight: "bold" };

export const SectionSegment = props => (
	<Segment inverted rounded stacked style={square}>
		<Header as="h1" textAlign="center" style={headerStyle}>
			{props.header}
		</Header>

		<Image
			centered
			style={imgSize}
			circular
			src={props.image}
		/>
	</Segment>
);
