import React from "react";
import { NavLink } from "react-router-dom";

import { AppBar, Toolbar, Typography, Link } from "@mui/material";
import { paths } from "../../Router/Router";

export const Header: React.FC = () => {
	return (
		<AppBar position="static" sx={{ mb: "20px" }}>
			<Toolbar>
				<Link
					sx={{
						color: "white",
						textDecoration: "none",
						mr: "20px",
						"&:hover": {
							backgroundColor: "primary.main",
							opacity: [0.9, 0.8, 0.7],
						},
					}}
					component={NavLink}
					to={paths.HOME}
					variant="button"
				>
					Home
				</Link>
				<Link
					sx={{
						color: "white",
						textDecoration: "none",
						"&:hover": {
							backgroundColor: "primary.main",
							opacity: [0.9, 0.8, 0.7],
						},
					}}
					component={NavLink}
					to={paths.SEARCH}
					variant="button"
				>
					Search
				</Link>

				<Typography
					variant="h6"
					component="div"
					sx={{ flexGrow: 1, textAlign: "center" }}
				>
					Photos
				</Typography>
			</Toolbar>
		</AppBar>
	);
};
