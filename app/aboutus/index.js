"use client";

import React from 'react';
import About from '@/components/About/About';
import Context from "@/context/Context";

import HeaderTop from "@/components/Header/HeaderTop/HeaderTop";
import Header from "@/components/Header/Header";
import PopupMobileMenu from "@/components/Header/PopUpMobileMenu";
import Footer from "@/components/Footers/Footer";
import Copyright from "@/components/Footers/Copyright";
import Breadcrumb from "@/components/Common/Breadcrumb";
import BackToTop from "../backToTop";

const AboutPage = () => {
    return (
      <>
        <main className="page-wrapper">
          <Context>
            <HeaderTop />
            <Header
              headerTransparent="header-transparent"
              headerSticky="header-sticky"
              btnClass="rainbow-gradient-btn"
            />
            <PopupMobileMenu />
            <Breadcrumb title="About Us" text="About Us" />

            <About />

            <BackToTop />
            <Footer />
            <Copyright />
          </Context>
        </main>
      </>
    );
}

export default AboutPage;







