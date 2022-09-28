import React from 'react'

function Navbar() {
  return (
<div>

       
       <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">OLxNavbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">MObilephone</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            AllCategories
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#"></a>Mobilephones</li>
            <li><a className="dropdown-item" href="#"></a>cars</li>
            <li><hr className="dropdown-divider"/>Motercycles</li>
            <li><a className="dropdown-item" href="#">tv-videos</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>

        <button class="btn btn-outline-success" type="submit">Search</button>


<span>LOGIN</span>
      </form>
    </div>
  </div>
</nav>
       
           </div>
  )
}

    

export default Navbar