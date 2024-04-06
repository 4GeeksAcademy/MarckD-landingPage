import React from "react";
import foto from "../../img/foto.jpg";

function Card(){
    return(
    <div className="card m-5" style={{width: "18rem"}}>
        <img src={foto} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
    </div>
    );
}

export default Card;