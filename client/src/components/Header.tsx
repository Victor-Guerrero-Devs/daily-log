import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="container p-4 flex flex-row justify-between items-center mx-auto">
      <div className="text-2xl font-bold">Daily Log</div>
      <nav>
        <ul className="flex flex-row gap-8">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/tasks"}>Tasks</Link>
          </li>
          <li>
            <Link to={"/add-task"}>Add Task</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
