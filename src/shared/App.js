import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Modal from "react-modal";
import Login from "../page/Login";
import SignUp from "../page/SignUp";
import Main from "../page/Main";
// import CommentDetail from "../components/CommentDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/main" element={<Main />} />
        {/* <Route path="/detail" element={<CommentDetail />} /> */}
      </Routes>
    </Router>
  );
}

Modal.setAppElement("#root");

export default App;
