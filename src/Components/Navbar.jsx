
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="sidebar">
  <Link class="active" to={"/Home"}>Home</Link>
  <Link to={"/AddScenario"}>Add Scenario</Link>
  <Link to={"/AllScenario"}>AllScenario</Link>
  <Link to={"/AddVehicle"}>AddVehicle</Link>
</div>
  );
}

export default Navbar;
