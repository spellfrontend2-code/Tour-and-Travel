import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex flex-col justify-between p-4 bg-gray-800 text-white">
      <Link to="/">Home</Link>
      <Link to="/destinations">Destinations</Link>
      <Link to="/tours">Tours</Link>
      <Link to="/deals">Deals</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}

export default Navbar;
