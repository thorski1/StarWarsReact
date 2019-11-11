import React from "react";
import { Grid } from "semantic-ui-react";
import { Link } from "@reach/router";
import {
	Animate,
	AnimateGroup
} from "react-simple-animate";

import { SectionSegment } from "./Home.Segment";
import { topics } from "../Data/Home.Segments";

export const Columns = props => {
	return (
		<>
			{topics.map((topic, i) => (
				<Grid.Column>
					<AnimateGroup play>
						<Animate
							duration={1.5}
							delay={1.3}
							start={{ opacity: 0 }}
							end={{ opacity: 1 }}
							sequenceIndex={i}
						>
							<Link to={topic.path} {...props}>
								<SectionSegment
									header={topic.header}
									image={topic.image}
								/>
							</Link>
						</Animate>
					</AnimateGroup>
				</Grid.Column>
			))}
		</>
	);
};
