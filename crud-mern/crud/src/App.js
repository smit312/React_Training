import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import SmitDevloper from "./Components/SmiDevloper";
import AllUser from "./Components/AllUser";
import AddUser from "./Components/AddUser";
import { Route, Router, Routes } from "react-router-dom";
import NotFound from "./Components/NotFound";
import EditUser from "./Components/EditUser";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="*" element={<NotFound />} exact />
        <Route path="/" element={<SmitDevloper />} />
        <Route path="/all" element={<AllUser />} exact />
        <Route path="/add" element={<AddUser />} exact />
        <Route path="/edit/:id" element={<EditUser />} />
      </Routes>
    </>
  );
}

export default App;
