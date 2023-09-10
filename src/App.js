import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { NotesState } from "./context/NotesState";
import { Alert } from "./components/Alert";
import {Login} from './components/Login'
import {Signup} from './components/Signup'
function App() {
  return (
    <div className="App">
      <NotesState>
        <Navbar />
        <Alert message={"Im and alert just for testing"} />
        <div className="container">
          <Routes>

            <Route exact path="/" element={<Home />}></Route>

            <Route exact path="/about" element={<About />}></Route>

            <Route exact path="/login" element={<Login/>}></Route>

            <Route exact path="/signup" element={<Signup />}></Route>
          </Routes>
        </div>
      </NotesState>
    </div>
  );
}
export default App;
