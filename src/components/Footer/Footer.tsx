import { Box, Typography } from "@mui/material";

import React from "react";

export const Footer: React.FC = () => {
	return (
		<footer>
			<Box
				sx={{
					width: "100%",
					height: 35,
					backgroundColor: "primary.dark",
					textAlign: "center",
					color: "white",
					mt: 5,
				}}
			>
				<Typography variant="h6">created by Sergii Poliakov</Typography>
			</Box>
		</footer>
	);
};
