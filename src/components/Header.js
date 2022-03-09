import React from "react";
import { NavLink } from "react-router-dom";

export default function Header(props) {
  return (
    <>
         <div className="d-flex justify-content-start">
          <NavLink to="/">
          <h4 className="me-4 nav-link">Home</h4>
          </NavLink>
          <NavLink to="/createuser">
            <h4 className="me-4 nav-link">Create New User</h4>
          </NavLink>
         
            <h4 className="me-4 nav-link">CRUD--CREATE READ UPDATE DELETE</h4>
            
           </div>
    </>
  );
}
