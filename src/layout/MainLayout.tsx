import MainNavbar from "@/shared/Navbar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div>
      <MainNavbar />
      <Outlet />
    </div>
  );
}
