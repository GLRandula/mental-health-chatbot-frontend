"use client";

import Context from "@/context/Context";
import HeaderDashboard from "@/components/Header/HeaderDashboard";
import PopupMobileMenu from "@/components/Header/PopUpMobileMenu";
import LeftDashboardSidebar from "@/components/Header/LeftDashboardSidebar";
import DoctorDetails from "@/components/DoctorDetails/DoctorDetails";

const DoctorDetailsPage = () => {
  return (
    <>
      <main className="page-wrapper rbt-dashboard-page">
        <Context>
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
