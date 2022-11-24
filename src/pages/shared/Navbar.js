import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import png from "../../assets/icon/resale.png";
import { AuthContext } from "../../context/AuthProvider";
import { Icon } from "@iconify/react";

const Navbar = () => {
  //   const { SignOut, user } = useContext(AuthContext);
  //   const navigate = useNavigate();

  //   const handleLogOut = () => {
  //     SignOut()
  //       .then(() => {
  //         toast.success("Successfully loged out");
  //         navigate("/login");
  //       })
  //       .catch((error) => console.error(error));
  //   };
  const menuItems = (
    <React.Fragment>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/appointment">Appointment</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/login">Log in</Link>
      </li>
      <li>
        <Link to="/signup">Sign up</Link>
      </li>

      {/* {user?.uid ? (
        <>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/reviews">Reviews</Link>
          </li>
          <li
            className="btn btn-ghost normal-case text-base flex items-center"
            onClick={handleLogOut}
          >
            Log out
          </li>
        </>
      ) : (
        <>
          <li>
            <Link to="/login">Log in</Link>
          </li>
          <li>
            <Link to="/signup">Sign up</Link>
          </li>
        </>
      )} */}
    </React.Fragment>
  );

  return (
    <div className="navbar bg-[#149777]">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost rounded-md lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link
          to="/"
          className="btn btn-ghost text-[#EEE] rounded-md normal-case text-xl"
        >
          <Icon
            className="mr-2"
            icon="ic:outline-laptop-mac"
            color="white"
            width="32"
            height="32"
          />
          Laptop Zone
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0 text-[#EEE]">{menuItems}</ul>
      </div>
      <label
        htmlFor="dashboard-drawer"
        tabIndex={0}
        className="btn btn-ghost btn-xs ml-20 rounded-md lg:hidden"
      >
        Open Drawer
      </label>
    </div>
  );
};

export default Navbar;
