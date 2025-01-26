import { Link } from "react-router";
import { useAppSelector } from "../../../../Redux/hooks";

const DashboradButton = () => {
  const { user } = useAppSelector((state) => state.auth);
  console.log("User: ", user);
  const role = user?.role;
  console.log("Role: ", role);
  return (
    <div>
      <div className="dropdown ">
        <div
          tabIndex={0}
          role="button"
          className="btn text-white bg-slate-600 hover:bg-slate-600"
        >
          Dashboard
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
        >
          <li>
            <Link to={`/${role}-dashboard`}>Profile</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboradButton;
