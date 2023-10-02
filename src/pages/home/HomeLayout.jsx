import { NavLink, Outlet } from "react-router-dom";
import { navLinks } from "../../constants";

const HomeLayout = () => {
  return (
    <div>
      <nav>
        {navLinks.map((link) => (
          <NavLink
            style={({ isActive }) => ({
              backgroundColor: isActive ? "yellow" : "",
            })}
            to={link.href}
            key={link.page}
          >
            {({ isActive }) => (
              <>
                {link.page}
                {isActive && "(Active)"}
              </>
            )}
          </NavLink>
        ))}
      </nav>
      <Outlet />
    </div>
  );
};

export default HomeLayout;
