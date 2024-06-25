import { useState } from "react";
import Header from "../../layout/globalcomponent/Header";
import { DashboardWrapper, Main } from "../../layout/globalcomponent/Utils";
import { Outlet } from "react-router-dom";
import SideBar from "../../dashboardcomponent/SideBar";

const Dashboard = () => {
  const [showSideBar, setShowSideBar] = useState(false);

  const toggleSidebar = () => {
    setShowSideBar(!showSideBar);
  };

  return (
    <>
      <Header toggleSidebar={toggleSidebar} showSidebar={showSideBar} />
      <DashboardWrapper>
        <SideBar
          showSideBar={showSideBar}
          closeSideBar={() => setShowSideBar(false)}
        />
        <Main>
          <Outlet />
        </Main>
      </DashboardWrapper>
    </>
  );
};

export default Dashboard;
