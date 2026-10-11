
import { Link, NavLink } from "react-router";

function Navbar({ cartCount = 0, searchTerm = "", onSearchChange }) {
  return (
    <header className="site-header">
      <nav className="navbar">
        <Link to="/" className="brand">
          Shop<span>Sphere</span>
        </Link>

        <div className="nav-links">
          <NavLink to="/" end>
            Home
          </NavLink>

          <NavLink to="/products">
            Products
          </NavLink>
        </div>

        <div className="nav-actions">
          <label className="search-box">
            <span className="search-icon" aria-hidden="true">⌕</span>
            <input
              type="search"
              placeholder="Search products..."
              aria-label="Search products"
              value={searchTerm}
              onChange={(event) => onSearchChange?.(event.target.value)}
            />
          </label>

          <Link to="/cart" className="cart-link">
            Cart
            <span className="cart-count">{cartCount}</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
