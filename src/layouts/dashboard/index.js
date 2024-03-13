import { Outlet } from "react-router-dom";
import Sidenav from "./sidenav";

const DashboardLayout = () => {

  return (
    <div className="flex h-screen flex-row">
      <Sidenav />
      <Outlet />
    </div>
  );
};

export default DashboardLayout;