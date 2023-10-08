import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { Navbar, AnimatedBG } from "../Component";

const AppLayout = () => {
  return (
    <Fragment>
      <Navbar />
      <AnimatedBG />
      <Outlet />
    </Fragment>
  );
};

export default AppLayout;
