import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Search } from "../pages/Search";

interface IPaths {
	HOME: string;
	SEARCH: string;
}

export const paths: IPaths = {
	HOME: "/",
	SEARCH: "/search",
};

export const Router: React.FC = () => {
	return (
		<main>
			<Routes>
				<Route path={paths.HOME} element={<Home />} />
				<Route path={paths.SEARCH} element={<Search />} />

				<Route
					path="*"
					element={
						<main style={{ padding: "1rem" }}>
							<p>There's nothing here!</p>
						</main>
					}
				/>
			</Routes>
		</main>
	);
};
