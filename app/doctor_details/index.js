"use client";

import Context from "@/context/Context";
import HeaderDashboard from "@/components/Header/HeaderDashboard";
import PopupMobileMenu from "@/components/Header/PopUpMobileMenu";
import LeftDashboardSidebar from "@/components/Header/LeftDashboardSidebar";
import DoctorDetails from "@/components/DoctorDetails/DoctorDetails";
import Header from "@/components/Header/Header";

const DoctorDetailsPage = () => {
  return (
    <>
      <main className="page-wrapper rbt-dashboard-page">
      
        <Context>
        <Header
            headerTransparent="header-transparent"
            headerSticky="header-sticky"
            btnClass="rainbow-gradient-btn"
          />
          <div className="rbt-panel-wrapper">
            {/* <HeaderDashboard display="d-none" /> */}
            <PopupMobileMenu />
            {/* <LeftDashboardSidebar /> */}

            <DoctorDetails />
          </div>
        </Context>
      </main>
    </>
  );
};

export default DoctorDetailsPage;
