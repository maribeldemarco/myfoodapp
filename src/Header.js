import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import React from "react";


function Header() {
    return (
    <div>

    <nav  class="navbar navbar-expand-lg bg-body-tertiary bg-white" >
  <div class="container-fluid">

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div  className="collapse navbar-collapse nav-abath" id="navbarNav">
      <ul className=" navbar-nav">
      <li class="nav-item">

      <a class="navbar-brand" href="#"> <svg className="icono" width="47" height="49" viewBox="0 0 47 49" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_107_84)">
<path d="M24.5337 22.6334C20.6105 19.3992 16.614 22.2513 10.3245 22.5221C1.09529 22.9339 -1.52011 27.9778 0.853773 31.558C3.22766 35.1383 8.92365 33.9035 12.2427 36.9201C12.2541 36.9316 12.2655 36.943 12.2769 36.943C12.2883 36.9545 12.2997 36.966 12.3111 36.966C15.7553 39.8446 15.3741 45.7015 19.2389 47.5462C23.1036 49.3909 27.6693 46.0444 26.7251 36.7784C26.0803 30.4633 28.2862 26.0743 24.5337 22.6334Z" fill="#F2994A"/>
<path d="M17.7308 11.697C17.3371 16.486 14.5265 20.1636 11.4611 19.9027C8.39568 19.6419 6.23775 15.5561 6.63147 10.7672C7.02519 5.97825 9.83575 2.30062 12.9012 2.56148C15.9666 2.82233 18.1245 6.90808 17.7308 11.697Z" fill="#F2994A"/>
<path d="M36.2643 27.8228C31.6164 28.9186 28.4295 32.2522 29.1278 35.2715C29.826 38.2909 34.1576 39.848 38.8055 38.7522C43.4533 37.6563 46.6403 34.3228 45.942 31.3034C45.2437 28.2841 40.9007 26.7269 36.2643 27.8228Z" fill="#F2994A"/>
<path d="M32.3387 11.4863C29.7681 15.8412 25.4291 18.0276 22.647 16.354C19.8536 14.6804 19.6775 9.80023 22.248 5.44534C24.8186 1.09045 29.1576 -1.09598 31.9397 0.57762C34.7217 2.25122 34.9092 7.1314 32.3387 11.4863Z" fill="#F2994A"/>
<path d="M34.3231 13.2182C30.4181 16.4146 28.919 21.067 30.9613 23.6026C33.0036 26.1382 37.823 25.6049 41.7279 22.4084C45.6329 19.2119 47.132 14.5596 45.0897 12.0239C43.0588 9.48829 38.228 10.0217 34.3231 13.2182Z" fill="#F2994A"/>
</g>
<defs>
<clipPath id="clip0_107_84">
<rect width="46" height="48" fill="white" transform="translate(0 0.0488892) rotate(-0.0608983)"/>
</clipPath>
</defs>
</svg> 
     
     <p className="iconotitulo"> RefuCat</p></a>
      </li>

        <li class="nav-item">
        <NavLink to="/" className="nav-link" >Home</NavLink>
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