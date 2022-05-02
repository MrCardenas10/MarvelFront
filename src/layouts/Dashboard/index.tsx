import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
	return (
		<div className="dashboard flex w-full h-full">
			<div className="flex flex-col w-64 h-full bg-green-300 p-6">
				<Link to="home">
					<span>Home</span>
				</Link>
				<Link to="characters">
					<span>Characters</span>
				</Link>
				<Link to="creators">
					<span>Creators</span>
				</Link>
			</div>
			<div className="contentPage w-full h-full">
				<Outlet />
			</div>
		</div>
	);
};

export default Dashboard;
