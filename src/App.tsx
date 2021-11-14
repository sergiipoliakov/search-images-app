import React from "react";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Router } from "./Router/Router";

function App() {
	return (
		<div className="App-wrapper">
			<div className="App-content">
				<Header />
				<Router />
			</div>
			<Footer />
		</div>
	);
}

export default App;
