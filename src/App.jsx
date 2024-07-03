import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Favourites from "./pages/favourites/Favourites";
import Detials from "./pages/detials/Detials";
import Navbar from "./components/nav-bar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/"></Route>
        <Route element={<Favourites />} path="/favourites"></Route>
        <Route element={<Detials />} path="/recipe-item/:id"></Route>
      </Routes>
    </>
  );
}

export default App;
