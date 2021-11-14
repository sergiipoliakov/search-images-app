import React, { useEffect, useState } from "react";

import { useDispatch } from "react-redux";

import { operations } from "../../redux/images";

import { Button, TextField } from "@mui/material";

type Props = {
	page: number;
};

export const SearchForm: React.FC<Props> = (props) => {
	const dispatch = useDispatch();

	const [query, setQuery] = useState("");

	const handleSubmit = (e: React.SyntheticEvent) => {
		e.preventDefault();

		dispatch(operations.searchImages(query, props.page));
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(e.target.value);
	};
	useEffect(() => {
		dispatch(operations.searchImages(query, props.page));

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [dispatch, props.page]);

	return (
		<form
			onSubmit={handleSubmit}
			style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				marginBottom: "25px",
			}}
		>
			<TextField
				variant="standard"
				label="Search"
				name="search"
				onChange={handleChange}
			/>
			<Button variant="contained" type="submit" sx={{ ml: "25px" }}>
				Search
			</Button>
		</form>
	);
};
