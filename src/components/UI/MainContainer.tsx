import React from "react";
import { Container, Typography } from "@mui/material";

export const MainContainer: React.FC = ({ children }) => {
	return (
		<>
			<Container fixed>
				<Typography
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
					}}
					component="div"
					children={children}
				/>
			</Container>
		</>
	);
};
