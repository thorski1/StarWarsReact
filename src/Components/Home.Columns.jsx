import React from "react";
import { Grid } from "semantic-ui-react";
import { Link } from "@reach/router";
import { SectionSegment } from "./Home.Segment";
import { topics } from "../Data/Home.Segments";

export const Columns = (props) => {
	return (
		<>
			{topics.map(topic => (
				<Grid.Column>
					<Link to={topic.path} {...props}>
						<SectionSegment
							header={topic.header}
							image={topic.image}
						/>
					</Link>
				</Grid.Column>
			))}
		</>
	);
};
