import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";
import Posts from "./components/Posts";
import NewPost from "./components/NewPost";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />}></Route>
          <Route path="/profile" exact element={<Profile />}></Route>
          <Route path="/posts" exact element={<Posts />}></Route>
          <Route path="/newpost" exact element={<NewPost />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
