import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { SidebarWrapper } from "./LayoutStyles";

const Sidebar = () => {
  const history = useHistory();
  const [activeSidebar, setActiveSidebar] = useState("Dashboard");
  const onRouteChange = (value: string, routeValue: string) => {
    console.log(value);
    setActiveSidebar(routeValue);
    history.push(`${value}`);
  };
  return (
    <SidebarWrapper>
      <h2 className="text-center">LOGO</h2>
      <ul className=" sidebar-link mt-4 cursor-pointer">
        <li
          onClick={() => onRouteChange("/", "Dashboard")}
          className={` ${activeSidebar === "Dashboard" ? "active" : ""} `}
        >
          Dashboard
        </li>
        {/* <li
          onClick={() => onRouteChange("/list", "List")}
          className={` ${activeSidebar === "List" ? "active" : ""} `}
        >
          List
        </li> */}
      </ul>
    </SidebarWrapper>
  );
};

export default Sidebar;
