import { Link, NavLink, Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="text=3xl p-8">
      {}
      <ul className="bg-slate-800 rounded text=white flex gap-x-8 px=4 py=2">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => `${isActive ? "text-yellow-500" : ""}`}
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => `${isActive ? "text-yellow-500" : ""}`}
          >
            About Page
          </NavLink>
        </li>
      </ul>

      <Outlet />
    </div>
  );
};

export default Root;
