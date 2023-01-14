import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import React from "react";


function Header() {
    return (
    <div>
    <nav  class="navbar navbar-expand-lg bg-body-tertiary bg-dark-subtle" >
  <div class="container-fluid">
  
     <a class="navbar-brand" href="#"> <img className="icono" src="./happy.png"/> <p> RefuCat</p></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div  className="collapse navbar-collapse nav-abath" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
        <NavLink to="/" className="nav-link active" >Home</NavLink>
        </li>
        <li class="nav-item">
        <NavLink to="/quienessomos" className="nav-link" >Quienes somos</NavLink>
        </li>
        <li class="nav-item">
        <NavLink to="/michisenadopcion" className="nav-link" >Michis en adopción</NavLink>
        </li>
        <li class="nav-item">
        <NavLink to="/contactanos" className="nav-link" >Contactanos!</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>

      </div>

      
      )
      
  }






export default Header