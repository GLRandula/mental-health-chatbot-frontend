import React from "react";
import GuideMenu from "./GuideMenu";
import ColorPalette from "./StyleSections/ColorPalette";
import Gradient from "./StyleSections/Gradient";
import Typography from "./StyleSections/Typography";
import FormElements from "./StyleSections/FormElements";
import Pagination from "./StyleSections/Pagination";
import Avatars from "./StyleSections/Avatars";
import AnimatedHeading from "./StyleSections/AnimatedHeading";

const StyleGuide = () => {
  return (
    <>
      <div className="rbt-style-guide-area rbt-utilize-area rainbow-section-gap-big">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-3">
              <div className="rbt-default-sidebar sticky-top rbt-shadow-box rbt-gradient-border">
                <GuideMenu />
              </div>
            </div>
            <div className="col-lg-9">
              <div
                id="colorPalette"
                className="rbt-elements-area rbt-shadow-box mb--60"
              >
                <ColorPalette />
              </div>
              <div
                id="gradient"
                className="rbt-elements-area rbt-shadow-box mb--60"
              >
                <Gradient />
              </div>
              <div
                id="typography"
                className="rbt-elements-area rbt-shadow-box mb--60"
              >
                <Typography />
              </div>
              <div
                id="formElements"
                className="rbt-elements-area rbt-shadow-box mb--60"
              >
                <FormElements />
              </div>
              <div
                id="pagination"
                className="rbt-elements-area rbt-shadow-box mb--60"
              >
                <Pagination />
              </div>
              <div
                id="avatars"
                className="rbt-elements-area rbt-shadow-box mb--60"
              >
                <Avatars />
              </div>
              <div
                id="animatedHeading"
                className="rbt-elements-area rbt-shadow-box mb--60"
              >
                <AnimatedHeading />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StyleGuide;
