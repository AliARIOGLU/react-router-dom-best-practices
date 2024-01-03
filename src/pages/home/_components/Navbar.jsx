import { Link, NavLink } from "react-router-dom";

import { useAuth } from "../../../context/AuthContext";
import { navLinks } from "../../../constants";

const Navbar = () => {
  const { authenticated, setUser } = useAuth();

  const handleLogout = () => {
    setUser(null);
  };
  return (
    <nav>
      {navLinks.map((link) => (
        <NavLink
          style={({ isActive }) => ({
            backgroundColor: isActive ? "yellow" : "",
          })}
          to={link.href}
          key={link.page}
        >
          {({ isActive }) => {
            return (
              <>
                {link.page}
                {isActive && "(Active)"}
              </>
            );
          }}
        </NavLink>
      ))}
      {authenticated ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <Link to="/auth/login">Login</Link>
      )}
    </nav>
  );
};

export default Navbar;
