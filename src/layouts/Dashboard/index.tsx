import { Link } from "react-router-dom";

type DashboardProps = {
	children:
		| JSX.Element
		| Function
		| React.ReactChild
		| React.ReactNode
		| React.ReactFragment;
};

const Dashboard = ({ children }: DashboardProps) => {
	return (
		<div className="container dashboard w-full h-full">
			<div className="flex flex-col w-64 h-full bg-green-300 p-6">
				<Link to="/">
					<span>Home</span>
				</Link>
				<Link to="/characters">
					<span>Characters</span>
				</Link>
				<Link to="/creators">
					<span>Creators</span>
				</Link>
			</div>
			<div className="contentPage h-full">{children}</div>
		</div>
	);
};

export default Dashboard;
