import React from "react";

import classNames from "classnames";
import { AiOutlineHome, AiOutlineUser, AiOutlineInbox } from "react-icons/ai";
import { NavLink } from "react-router-dom";

import { HOME_PATH } from "@/constants/routePaths";

const navItems = [
  {
    label: "Home",
    path: HOME_PATH,
    icon: <AiOutlineHome className="my-auto w-14 h-14 text-current" />,
  },
  {
    label: "Inventario",
    path: HOME_PATH,
    icon: <AiOutlineInbox className="my-auto w-11.5 h-11.5 text-current" />,
  },
  {
    label: "Perfil",
    path: HOME_PATH,
    icon: <AiOutlineUser className="my-auto w-14 h-14 text-current" />,
  },
];

const Navigation: React.FC = () => (
  <nav className="w-full pb-8.5 md:pb-7 max-w-85 md:max-w-218 mx-auto">
    <ul className="flex justify-between items-end">
      {navItems.map((item) => (
        <li key={item.path} className="flex flex-col items-center">
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              classNames(
                "flex flex-col items-center justify-between",
                "transition-all duration-200",
                "md:px-11 pt-1.5 md:pt-3.75 pb-3 md:pb-8.75",
                "w-15 md:w-38.5 h-16 md:h-41",
                {
                  "bg-[#101A34] rounded-lg shadow-lg z-10 text-white font-semibold":
                    isActive,
                  "text-gray-200": !isActive,
                },
              )
            }
          >
            <span className="w-6.5 md:w-16.5 h-6.5 md:h-16.5 flex items-center justify-center">
              {item.icon}
            </span>
            <span className="text-sm md:text-2xl font-light md:tracking-wide">
              {item.label}
            </span>
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navigation;
