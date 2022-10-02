import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Index";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
