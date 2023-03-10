import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Singup";
import Login from "./components/Login";
import Team from "./components/Teams/Team";
import MainTeam from "./components/Teams/MainTeam";
import MainMatch from "./components/Match/MainMatch";

function App() {
	const user = localStorage.getItem("token");

	return (
		<Routes>
			{user && <Route path="/" exact element={<Main />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
			<Route path="/teams" exact element={<MainTeam />} />
			<Route path="/match" exact element={<MainMatch />} />
		</Routes>
	);
}

export default App;
