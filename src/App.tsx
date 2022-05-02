import { Route, Routes } from "react-router-dom";
import Characters from "./pages/Characters";
import Creators from "./pages/Creators";
import Home from "./pages/Home";

function App() {
	return (
		<div className="App w-full h-screen">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/characters" element={<Characters />} />
				<Route path="/creators" element={<Creators />} />
			</Routes>
		</div>
	);
}

export default App;
