import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
const MainLayout: React.FC = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="bg-slate-600 min-h-[calc(100vh-60px)]">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;
