import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <main className="max-w-screen overflow-hidden">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
