import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Modal from "react-modal";
import Login from "../page/LogIn";
import SignUp from "../page/SignUp";
import Header from "../components/Header";
import Main from "../page/Main";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </Router>
  );
}

Modal.setAppElement("#root");

export default App;
