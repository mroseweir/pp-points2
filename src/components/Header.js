import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../../src/App.css";
export default function Header() {
  return (
    <header className="header">
      <main>
        <nav>
          <ul>
            <li>
              <Link to="/" element={<h1>test</h1>}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/AddStudent">Add Student</Link>
            </li>
            <li>
              <NavLink to="/StudentDirectory">Student Directory</NavLink>
            </li>
            <li>
              <NavLink to="/AdminLogin">Admin Login</NavLink>
            </li>
          </ul>
        </nav>
      </main>
    </header>
  );
}
