import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../page/LogIn";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
