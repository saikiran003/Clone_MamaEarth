import React from 'react'

export const Crousel=()=> {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner"> 
    <div className="carousel-item active">
      <img className="d-block w-100" src="https://images.ctfassets.net/66mrrren2unf/2nFAFSa68RorsrU94U5pO9/90708e3f5bd6f312d9911b63e4977a3e/desktop-body-wash.jpg?q=40" alt="First slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://images.ctfassets.net/66mrrren2unf/OoKYuxKNlL96p4n6uytiG/02aecfff5b2170bf9fab1c1be850e17c/Desktop_Without_CTA.jpg?q=40" alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://images.ctfassets.net/66mrrren2unf/3sQE1O24Tz2h2g1EeAvGy1/d38d3bffc0dca32cb964ab13b091e32c/Desktop.jpg?q=40" alt="Third slide"/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
  )
}

