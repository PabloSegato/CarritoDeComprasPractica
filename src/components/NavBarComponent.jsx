import { ShoppingCart } from "@mui/icons-material";
import { Badge } from "@mui/material";
import { NavLink } from "react-router-dom";
import "../styles/NavBarComponent.css";
const NavBarComponent = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <NavLink to="/" className="navbar-brand">
            Total Compras
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink to="/" className="nav-link " aria-current="page">
                Productos
              </NavLink>
            </div>
            <div className="navbar-nav">
              <NavLink to="/carrito" className="nav-link " aria-current="page">
                Carrito
              </NavLink>
            </div>
          </div>
          <NavLink className="cart-icon" to="/carrito">
            <Badge badgeContent={4} color="primary">
              <ShoppingCart />
            </Badge>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default NavBarComponent;
