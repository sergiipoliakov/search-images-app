import React from "react";
import { Typography } from "@mui/material";

import { MainContainer } from "../components/UI/MainContainer";

export const Home: React.FC = () => {
	return (
		<MainContainer>
			<Typography
				sx={{ textAlign: "center" }}
				variant="h3"
				component="h4"
				color="primary"
			>
				Images Finder
			</Typography>
			<Typography
				sx={{ textAlign: "center" }}
				variant="subtitle1"
				gutterBottom
				color="secondary"
			>
				We are glad to see you on our website.
			</Typography>
		</MainContainer>
	);
};
