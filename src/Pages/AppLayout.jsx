import { Outlet } from "react-router-dom";
import { Navbar, AnimatedBG } from "../Component";

const AppLayout = () => {
  return (
    <>
      <Navbar />
      <AnimatedBG />
      <Outlet />
    </>
  );
};

export default AppLayout;
