import React from "react";
import UserNav from "../Common/UserNav";
import Pricing from "../Pricing/Pricing";
import PricingData from "../../data/pricing.json";
import Compare from "../Pricing/Compare";
import AccordionItem from "../Accordion/AccordionItem";

const PlansBilling = () => {
  return (
    <>
      <div className="rbt-main-content mb-0">
        <div className="rbt-daynamic-page-content center-width">
          <div className="rbt-dashboard-content">
            <UserNav title="Plans & Billing" />
            <div className="content-page pb--50">
              <div className="aiwave-pricing-area wrapper">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <nav className="aiwave-tab">
                        <div
                          className="tab-btn-grp nav nav-tabs text-center justify-content-center"
                          id="nav-tab"
                          role="tablist"
                        >
                          {PricingData &&
                            PricingData.pricing.map((data, index) => (
                              <button
                                className={`nav-link ${
                                  data.isSelect ? "active" : ""
                                }`}
                                id={`${data.priceId}-tab`}
                                data-bs-toggle="tab"
                                data-bs-target={`#${data.priceId}`}
                                type="button"
                                role="tab"
                                aria-controls={data.priceId}
                                aria-selected="false"
                                key={index}
                              >
                                {data.priceType}{" "}
                                {data.discount ? (
                                  <span className="rainbow-badge-card badge-border">
                                    -{data.discount}%
                                  </span>
                                ) : (
                                  ""
                                )}
                              </button>
                            ))}
                        </div>
                      </nav>
                    </div>
                  </div>

                  <Pricing
                    parentClass="col-lg-6 col-md-6 col-12"
                    start={1}
                    end={3}
                    isHeading={false}
                    isBadge={false}
                  />
                </div>
              </div>
            </div>
            <div className="rbt-sm-separator"></div>

            <Compare subTitle="" title="Detailed Compare" postion="left" />

            <div className="row rainbow-section-gap row--20">
              <div className="col-lg-12">
                <AccordionItem />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlansBilling;
