import React from "react";

import UserNav from "../Common/UserNav";
import FaqAccordion from "./FaqAccordion";

import AccordionData from "../../data/dashboard.json";
import ContactUs from "./ContactUs";

const Help = () => {
  return (
    <>
      <div className="rbt-main-content mb-0">
        <div className="rbt-daynamic-page-content center-width">
          <div className="rbt-dashboard-content">
            <UserNav title="Help & FAQs" />
            <div className="content-page pb--50">
              <div className="chat-box-list">
                <div className="content">
                  <div className="rainbow-accordion-style accordion rainbow-section-gapBottom">
                    <div className="accordion" id="accordionExamplea">
                      {AccordionData &&
                        AccordionData.accordion.map((data, index) => (
                          <FaqAccordion
                            {...data}
                            key={index}
                            acc={data}
                            num={index}
                          />
                        ))}
                    </div>
                  </div>

                  <div className="single-settings-box contact-box overflow-hidden">
                    <h4 className="title mb--30">Contact Us</h4>
                    <ContactUs />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Help;
