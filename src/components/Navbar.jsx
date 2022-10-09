import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav--container">
      <ul className="nav--list">
        <li className="nav--item">
          <Link className="link--item" to="/home">
            Home
          </Link>
        </li>

        <li className="nav--item">
          <Link className="link--item" to="/product">
            Product
          </Link>
        </li>

        <li className="nav--item">
          <Link className="link--item" to="/testimonial">
            Testimonial
          </Link>
        </li>

        <li className="nav--item">
          <Link className="link--item" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
