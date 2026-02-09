import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import {  ListTodo, Calculator, Info, Database, FileJson } from "lucide-react";

function Header() {
  return (
    <nav className="navbar">
      <div className="nav-logo">MyReactApp</div>

      <div className="nav-links">
        {/* <NavLink to="/" className="nav-item">
          <Home size={18} /> Home
        </NavLink> */}

        <NavLink to="/crud" className="nav-item">
          <Database size={18} /> CRUD
        </NavLink>
        
        <NavLink to="/crudjson" className="nav-item">
          <FileJson size={18} /> CRUD JSON
        </NavLink>

        <NavLink to="/about" className="nav-item">
          <Info size={18} /> About
        </NavLink>

        <NavLink to="/todo" className="nav-item">
          <ListTodo size={18} /> Todo
        </NavLink>

        <NavLink to="/calcu" className="nav-item">
          <Calculator size={18} /> Calculator
        </NavLink>
        <NavLink to="/weather" className="nav-item">
          <Calculator size={18} /> Weather
        </NavLink>
         <NavLink to="/Quizie" className="nav-item">
          <Calculator size={18} /> Quizie
        </NavLink>
      </div>
    </nav>
  );
}

export default Header;
