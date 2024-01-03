import { Outlet } from "react-router-dom";
import Navbar from "./_components/Navbar";

const HomeLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default HomeLayout;
