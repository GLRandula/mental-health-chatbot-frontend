"use client";

import React from 'react';
import Contact from '@/components/Contact/Contact';
import Context from "@/context/Context";

import HeaderTop from "@/components/Header/HeaderTop/HeaderTop";
import Header from "@/components/Header/Header";
import PopupMobileMenu from "@/components/Header/PopUpMobileMenu";
import Footer from "@/components/Footers/Footer";
import Copyright from "@/components/Footers/Copyright";
import Breadcrumb from "@/components/Common/Breadcrumb";
import BackToTop from "../backToTop";

const ContactPage = () => {
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
            <Breadcrumb title="Contact Us" text="Contact Us" />

            <Contact />

            <BackToTop />
            <Footer />
            <Copyright />
          </Context>
        </main>
      </>
    );
}

export default ContactPage;
