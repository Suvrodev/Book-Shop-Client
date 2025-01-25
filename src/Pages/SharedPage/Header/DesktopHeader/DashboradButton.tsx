import { Link } from "react-router";

const DashboradButton = () => {
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
            <Link to={"/user-dashboard"}>Profile</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboradButton;
