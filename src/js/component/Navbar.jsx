import React from "react";

function Navbar(){
    return(
      
        <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{background: "black"}}>
          <div className="container-fluid">
            <a className="navbar-brand" style={{color: "white"}} href="#">Start Bootstrap</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarScroll">
              <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#"></a>
                </li>
               
              </ul>
              <div className="d-flex"  role="search">
                <li className="nav">
                  <a className="nav-link active" aria-current="page" style={{color: "white"}} href="#">Home</a>
                </li>
               
                <li className="nav">
                  <a className="nav-link active" aria-current="page" style={{color: "white"}} href="#">About</a>
                </li>

                <li className="nav">
                  <a className="nav-link active" aria-current="page" style={{color: "white"}} href="#">Services</a>
                </li>
               
                <li className="nav">
                  <a className="nav-link active" aria-current="page" style={{color: "white"}} href="#">Contact</a>
                </li>
              
              </div>
            </div>
          </div>
        </nav>
    )
}

export default Navbar;