import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../page/LogIn";
import SignUp from "../page/SignUp";
import Post from "../components/Post";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Post />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
