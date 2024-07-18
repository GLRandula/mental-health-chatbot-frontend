"use client";

import React from "react";
import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";

const GuideMenu = () => {
  const [currentSection, setCurrentSection] = useState("colorpalette");

  const sections = [
    { id: "colorPalette", label: "Color Palette" },
    { id: "gradient", label: "Color Gradient" },
    { id: "typography", label: "Typography" },
    { id: "formElements", label: "Form Elements" },
    { id: "pagination", label: "Pagination" },
    { id: "avatars", label: "Avatars" },
    { id: "animatedHeading", label: "Animated Heading" },
  ];

  useEffect(() => {
    const sectionIds = [
      "colorPalette",
      "gradient",
      "typography",
      "formElements",
      "pagination",
      "avatars",
      "animatedHeading",
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sectionIds) {
        const element = document.getElementById(sectionId);

        if (element && scrollPosition >= element.offsetTop) {
          setCurrentSection(sectionId);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentSection]);
  return (
    <>
      <div className="inner">
        <div className="content-item-content">
          <div className="rbt-widget-details">
            <nav className="onepagenav">
              <ul className="mainmenu rbt-course-details-list-wrapper">
                {sections.map((sec, i) => (
                  <li
                    className={currentSection === sec.id ? "current" : ""}
                    key={i}
                  >
                    <ScrollLink
                      to={sec.id}
                      spy={true}
                      smooth={true}
                      duration={500}
                      offset={-70}
                      style={{ cursor: "pointer" }}
                    >
                      {i + 1}. {sec.label}
                    </ScrollLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default GuideMenu;
