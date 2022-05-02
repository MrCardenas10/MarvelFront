import { Route, Routes } from "react-router-dom";
import Dashboard from "./layouts/Dashboard";
import Characters from "./pages/Characters";
import Creators from "./pages/Creators";
import Home from "./pages/Home";

function App() {
	return (
		<div className="App w-full h-screen">
			<Routes>
				<Route path="/" element={<Dashboard />}>
					<Route path="home" element={<Home />} />
					<Route path="characters" element={<Characters />} />
					<Route path="creators" element={<Creators />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
