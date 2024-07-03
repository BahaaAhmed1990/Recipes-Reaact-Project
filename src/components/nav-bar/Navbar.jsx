import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { globalContext } from "../../context/GlobalState";

export default function Navbar() {
  const { searchParam, setSearchParam, handleSubmit } =
    useContext(globalContext);
  return (
    <nav className="flex justify-between items-center  py-8 container">
      <h1 className="text-2xl font-semibold p-4">
        <NavLink to={"/"}>recipes list</NavLink>
      </h1>

      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={searchParam}
            onChange={(event) => setSearchParam(event.target.value)}
            placeholder="Enter A recipe name"
            className="bg-slate-50 p-3 px-4 rounded-full w-96 outline-none shadow-lg shadow-red-300"
          />
        </form>
      </div>
      <ul className="flex items-center gap-5 p-4">
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/favourites"}>Favourites</NavLink>
        </li>
      </ul>
    </nav>
  );
}
