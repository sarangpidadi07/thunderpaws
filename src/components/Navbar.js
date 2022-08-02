import React from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import {FaPaw} from 'react-icons/fa';
 
const Top = (args) => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark fixed-top border-bottom border-light">
  <div className="container-fluid">
    <p className="navbar-brand text-white fw-bold fs-3"><FaPaw/> Thunderpaws</p>
    <div className="collapse navbar-collapse">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-light" type="submit"><BiSearchAlt /></button>
      </form>
    </div>
  </div>
</nav>
  );
}

export default Top;