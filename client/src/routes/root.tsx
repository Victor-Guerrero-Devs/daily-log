import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Root: React.FC = () => {
  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh-64px)] bg-gray-300">
        <Outlet />
      </main>
    </>
  );
};

export default Root;
