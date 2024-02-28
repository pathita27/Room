import React from "react";
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-info ">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
        <h2>𝐋𝐚𝐛𝐨𝐫𝐚𝐭𝐨𝐫𝐲</h2>
        </NavLink>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" to="/" aria-current="page">
              𝗛𝗼𝗺𝗲 <span className="visually-hidden">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/room">
              𝗥𝗼𝗼𝗺
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/booking">
              𝗕𝗼𝗼𝗸𝗶𝗻𝗴
              </NavLink>
            </li>
           <li className="nav-item">
              <NavLink className="nav-link" to="/login">
              𝗟𝗼𝗴𝗶𝗻 𝗜 𝗥𝗲𝗴𝗶𝘀𝘁𝗲𝗿
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
