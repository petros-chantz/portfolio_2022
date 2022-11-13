import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="flex flex-row justify-between px-10">
        <Link to="/" relative="path">
          <h6 className="navbar--title">petros chantzopoulos</h6>
        </Link>
      </div>
    </nav>
  );
};
