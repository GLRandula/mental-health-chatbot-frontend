"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Sal from "sal.js";

import intellibot from "../../public/images/cta-img/intellibot01.png";
import npm from "../../public/images/cta-img/npm.png";
import viewImg from "../../public/images/cta-img/view-img.png";
import bgShape from "../../public/images/cta-img/bg-shape.png";
import bgLight from "../../public/images/bg/bg-shape-tree.png";

const CtaTwo = () => {
  useEffect(() => {
    Sal();
  }, []);
  return (
    <>
      <div className="row">
        <div className="col-lg-12">
          <div className="aiwave-cta">
            <div className="inner">
              <div className="content-left">
                <div
                  className="section-title text-left"
                  data-sal="slide-up"
                  data-sal-duration="400"
                  data-sal-delay="150"
                >
                  <h4 className="subtitle">
                    <span className="theme-gradient">
                      Get Started with ViewMo
                    </span>
                  </h4>
                  <h2 className="title w-600 mb--20">
                    Experience Products in AI
                  </h2>
                  <p className="description b1">
                    Based on your interactions with our comprehensive AI solutions, designed to <br />
                    enhance your understanding and productivity.
                  </p>
                </div>
                <div className="app-store-btn">
                  <Link className="store-btn" href="https://pypi.org/project/intellibot/">
                    <Image
                      src={intellibot}
                      width={157}
                      height={55}
                      alt="Play Store Button"
                    />
                  </Link>
                  <Link className="store-btn" href="https://www.npmjs.com/package/viewmo?activeTab=readme">
                    <Image
                      src={npm}
                      width={157}
                      height={55}
                      alt="Apple Store Button"
                    />
                  </Link>
                </div>
              </div>
              <div className="content-right">
                <div className="img-right">
                  <Image
                    src={viewImg}
                    width={449}
                    height={499}
                    alt="Mobile View"
                  />
                </div>
              </div>
              <div className="bg-shape-one">
                <Image src={bgShape} width={639} height={404} alt="Bg shape" />
              </div>
            </div>
            <div className="bg-shape-inside">
              <Image src={bgLight} width={968} height={1103} alt="Bg shape" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CtaTwo;
