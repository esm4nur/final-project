import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img
              src="https://www.bursa.bel.tr/assets/images/logo_beyaz1.png"
              style={{ height: 35 }}
              alt=""
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav text-decoration-none">
              <NavLink className="nav-link fw-medium text-white" to="/">
                Anasayfa
              </NavLink>

              <li className="nav-item dropdown fw-medium text-white">
                <a
                  className="nav-link dropdown-toggle  text-white"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                 Sanayi
                </a>
                <ul className="dropdown-menu">
                  <NavLink className="dropdown-item" to="About">
                    Bursa Sanayi Noktaları
                  </NavLink>
                  <NavLink className="dropdown-item" to="History">
                  Bursa Organize Sanayi Bölgeleri
                    
                  </NavLink>
                  <NavLink className="dropdown-item" to="Population">
                  Bursa Sektör Analizi
                  </NavLink>
                </ul>
              </li>

              <NavLink className="nav-link fw-medium text-white" to="/plajlar">
                Sanayi Bölgeleri
              </NavLink>

              <NavLink className="nav-link fw-medium text-white" to="/SanayiBolgeleri">
                Sanayi Bölgeleri
              </NavLink>

              <NavLink className="nav-link fw-medium text-white" to="/contact">
                İletişim
              </NavLink>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
