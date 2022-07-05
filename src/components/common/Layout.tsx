import React from "react";
import Dashboard from "../dashboard/Dashboard";
import Header from "./Header";
import { DashboardWrapper } from "./LayoutStyles";
import Sidebar from "./Sidebar";

const Layout = (props: any) => {
  const { children } = props;
  return (
    <>
      <DashboardWrapper>
        <Sidebar />
        <div className="d-flex flex-column flex-grow-1 h-100 overflow-hidden">
          <Header />
          {children}
        </div>
      </DashboardWrapper>
    </>
  );
};

export default Layout;
