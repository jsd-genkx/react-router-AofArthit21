import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav className="bg-gray-800 p-4">
        <ul className="flex justify-center space-x-4">
          <li>
            <Link to="/" className="text-white hover:text-gray-400">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white hover:text-gray-400">
              About
            </Link>
          </li>
          <li>
            <Link to="/products" className="text-white hover:text-gray-400">
              ProductList
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-white hover:text-gray-400">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
