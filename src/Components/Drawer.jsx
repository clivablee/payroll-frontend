import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAuthStore from "../Features/Login/Store/AuthStore";
import { FaHome, FaUser, FaUsers, FaClock, FaMoneyBill } from "react-icons/fa";
import useProfileStore from "../Features/Profile/Store/ProfileStore";

const Drawer = ({ toggleDrawer }) => {
  const logout = useAuthStore((state) => state.logout);
  const profile = useProfileStore((state) => state.profile);

  const drawerData = [
    { icon: FaHome, label: "Home", route: "/" },
    { icon: FaUser, label: "Profile", route: "/profile" },
    { icon: FaUsers, label: "Employees", route: "/employees" },
    { icon: FaClock, label: "Attendance", route: "/attendance" },
    { icon: FaMoneyBill, label: "Payroll", route: "/payroll" },
  ];

  return (
    <div className="h-screen w-72">
      {/* <buttonbn   
            onClick={toggleDrawer}
            className='p-2 bg-blue-600 text-white'
        >
            Open Drawer

        </button> */}

      <nav className="flex flex-col justify-between h-full p-4">
        <div>
          <div className="flex items-center mb-4">
            <FaRegUserCircle className="mr-2 text-4xl" />
            <div>
              <p className="text-xl font-bold">{profile && profile.emp_name}</p>
              <p className="text-sm font-light">
                {profile && profile.job_title}
              </p>
            </div>
          </div>
          <ul className="space-y-4 p-4 bg-gray-100 rounded-lg shadow-md">
            {drawerData.map((data, index) => {
              return (
                <li className="flex items-center p-3 rounded-lg mb-4 transition-all duration-200 hover:bg-blue-100 ">
                  <data.icon className="mr-3 text-blue-600" />
                  <Link
                    to={data.route}
                    className="text-blue-600 hover hover:text-blue-800"
                  >
                    {data.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <Link
          className="text-red-600 hover:underline"
          onClick={() => {
            logout();
          }}
        >
          Logout
        </Link>
      </nav>
    </div>
  );
};

export default Drawer;
