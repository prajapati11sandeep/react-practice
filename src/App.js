import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageNotFound from "./components/PageNotFound";
import Homepage from "./Pages/Homepage/Homepage";
import Calculator from "./Pages/Calculator/Calculator";
import Snapshot from "./Pages/Snapshot/Snapshot";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<Homepage />} />
				<Route path="/calculator" element={<Calculator />} />
				<Route path="/snapshot" element={<Snapshot />} />
				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
