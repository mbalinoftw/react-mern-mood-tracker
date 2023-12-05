import React from "react";
import Container from "./Layout/Container";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="py-6 bg-slate-100">
      <Container>
        <div className="flex items-center justify-between">
          <Link to="/">Mood Buddy</Link>
          <ul className="flex items-center justify-end gap-4">
            <li className="">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="">
              <NavLink to="/login">Login</NavLink>
            </li>
            <li className="">
              <NavLink to="/signup">Sign up</NavLink>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
}
