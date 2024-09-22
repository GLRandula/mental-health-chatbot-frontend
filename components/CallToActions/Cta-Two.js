"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Sal from "sal.js";

import viewImg from "../../public/images/cta-img/view-img.png";
import bgShape from "../../public/images/cta-img/bg-shape.png";
import bgLight from "../../public/images/bg/bg-shape-tree.png";
import apple from "../../public/images/cta-img/apple-app.png";
import google from "../../public/images/cta-img/google.png";

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
                      Get Started with LIORA
                    </span>
                  </h4>
                  <h2 className="title w-600 mb--20">
                    Experience Products in AI
                  </h2>
                  <p className="description b1">
                    Based on your interactions with our advanced AI assistant, designed to enhance <br />
                    your well-being and support your mental health journey.
                  </p>
                </div>
                <div className="app-store-btn">
                  <Link className="store-btn" href="#">
                    <Image
                      src={google}
                      width={157}
                      height={55}
                      alt="Play Store Button"
                    />
                  </Link>
                  <Link className="store-btn" href="#">
                    <Image
                      src={apple}
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

// Lanchan, agents, vector store, cloud thama