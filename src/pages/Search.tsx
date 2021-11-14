import React, { useState } from "react";

import { useSelector } from "react-redux";
import { selectors } from "../redux/images";
import { MainContainer } from "../components/UI/MainContainer";
import { SearchForm } from "../components/SearchForm/SearchForm";
import { ImagesList } from "../components/ImagesList/ImagesList";
import { Pagination, Stack, Box, CircularProgress, Modal } from "@mui/material";

const style = {
	position: "absolute" as "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
};

export const Search: React.FC = () => {
	const [page, setPage] = useState(1);
	const images = useSelector(selectors.getAllSerchImages);
	const loading = useSelector(selectors.getLoading);

	const pageChange = (event: React.ChangeEvent<unknown>, page: number) => {
		setPage(page);
	};

	return (
		<MainContainer>
			<SearchForm page={page} />

			<Modal
				open={loading}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<CircularProgress size={130} />
				</Box>
			</Modal>

			{images.length > 0 && (
				<>
					<Stack spacing={2}>
						<Pagination
							count={100}
							color="primary"
							page={page}
							onChange={pageChange}
						/>
					</Stack>

					<ImagesList images={images} />

					<Stack spacing={2}>
						<Pagination
							count={100}
							color="primary"
							page={page}
							onChange={pageChange}
						/>
					</Stack>
				</>
			)}
		</MainContainer>
	);
};
