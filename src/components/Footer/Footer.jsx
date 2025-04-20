import React from 'react'
import "./Footer.css"

export const Footer = () => {
  return (
    <footer className="container-fluid p-5">
    <div className="d-flex flex-column align-items-center">
      <div className="row w-100">
        {/* Menú de navegación */}
        <nav className="col-12 col-md-6 mt-3">
          <ul className="list-unstyled">
            <li><a href="home.php" className="nav-footer">Home</a></li>
            <li><a href="catalog-events.html" className="nav-footer">Events</a></li>
            <li><a href="about-us.html" className="nav-footer">About us</a></li>
          </ul>
        </nav>

        {/* Información de contacto */}
        <div className="footer-contact col-12 col-md-6 mt-3">
          <p className="text-nowrap m-1"><i className="fa-solid fa-phone me-2"></i> +34 123 456 789</p>
          <p className="text-nowrap m-1"><i className="fa-solid fa-envelope me-2"></i> contacto@empresa.com</p>
          <p className="text-nowrap m-1"><i className="fa-solid fa-map-marker-alt me-2"></i> Calle Falsa 123, Madrid, España</p>
        </div>
      </div>
    </div>

    {/* Redes Sociales */}
    <div className="d-flex justify-content-center align-items-center gap-3 mt-3 col-12">
      <a href="#" className="footer-social"><i className="fa-brands fa-facebook"></i></a>
      <a href="#" className="footer-social"><i className="fa-brands fa-twitter"></i></a>
      <a href="#" className="footer-social"><i className="fa-brands fa-instagram"></i></a>
      <a href="#" className="footer-social"><i className="fa-brands fa-linkedin"></i></a>
    </div>

    {/* Derechos de autor */}
    <div className="footer-bottom text-center pt-4 col-12">
      <p>&copy; 2025 Random Events. All rights reserved.</p>
    </div>
  </footer>
  )
}
