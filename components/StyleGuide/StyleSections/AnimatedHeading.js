"use client";

import React, { useEffect, useState } from "react";
import Typed from "typed.js";

const AnimatedHeading = () => {
  const [visibleIndex, setVisibleIndex] = useState(0);
  const [visibleIndex2, setVisibleIndex2] = useState(0);

  useEffect(() => {
    const typeitInstance = new Typed(".is-visible-one", {
      strings: ["Clip One.", "Clip Two.", "Clip Three."],
      typeSpeed: 80,
      backSpeed: 60,
      startDelay: 200,
      loop: Infinity,
      showCursor: false,
    });
    const intervalId = setInterval(() => {
      setVisibleIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 2000);

    const intervalIdTwo = setInterval(() => {
      setVisibleIndex2((prevIndex) => (prevIndex + 1) % 2);
    }, 2000);

    return () => {
      typeitInstance.destroy();
      clearInterval(intervalId);
      clearInterval(intervalIdTwo);
    };
  }, []);
  return (
    <>
      <div className="wrapper">
        <div className="section-title">
          <h4 className="rbt-title-style-3">Animated Heading</h4>
        </div>
        <div className="row g-5">
          <div className="col-lg-12">
            <h3 className="title">
              Clip Animated
              <span className="header-caption ms-2">
                <span className="cd-headline clip is-full-width">
                  <span className="cd-words-wrapper">
                    <b className="is-visible theme-gradient is-visible-one"></b>
                  </span>
                </span>
              </span>
            </h3>

            <h3 className="title">
              Rotate Animated
              <span className="header-caption ms-2">
                <span className="cd-headline rotate-1">
                  <span className="cd-words-wrapper">
                    <b
                      className={
                        visibleIndex === 0
                          ? "is-visible theme-gradient"
                          : "is-hidden theme-gradient"
                      }
                    >
                      Rotate One.
                    </b>
                    <b
                      className={
                        visibleIndex === 1
                          ? "is-visible theme-gradient"
                          : "is-hidden theme-gradient"
                      }
                    >
                      Rotate Two.
                    </b>
                    <b
                      className={
                        visibleIndex === 2
                          ? "is-visible theme-gradient"
                          : "is-hidden theme-gradient"
                      }
                    >
                      Rotate Three.
                    </b>
                  </span>
                </span>
              </span>
            </h3>

            <h3 className="title">
              Loading Animated
              <span className="header-caption ms-2">
                <span className={`cd-headline loading-bar`}>
                  <span
                    className={`cd-words-wrapper ${
                      visibleIndex2 === 1 ? "is-loading" : ""
                    }`}
                  >
                    <b
                      className={
                        visibleIndex === 0
                          ? "is-visible theme-gradient"
                          : "is-hidden theme-gradient"
                      }
                    >
                      Loading One.
                    </b>
                    <b
                      className={
                        visibleIndex === 1
                          ? "is-visible theme-gradient"
                          : "is-hidden theme-gradient"
                      }
                    >
                      Loading Two.
                    </b>
                    <b
                      className={
                        visibleIndex === 2
                          ? "is-visible theme-gradient"
                          : "is-hidden theme-gradient"
                      }
                    >
                      Loading Three.
                    </b>
                  </span>
                </span>
              </span>
            </h3>

            <h3 className="title">
              Zoom Animated
              <span className="header-caption ms-2">
                <span className="cd-headline zoom">
                  <span className="cd-words-wrapper">
                    <b
                      className={
                        visibleIndex === 0
                          ? "is-visible theme-gradient"
                          : "is-hidden theme-gradient"
                      }
                    >
                      Zoom One.
                    </b>
                    <b
                      className={
                        visibleIndex === 1
                          ? "is-visible theme-gradient"
                          : "is-hidden theme-gradient"
                      }
                    >
                      Zoom Two.
                    </b>
                    <b
                      className={
                        visibleIndex === 2
                          ? "is-visible theme-gradient"
                          : "is-hidden theme-gradient"
                      }
                    >
                      Zoom Three.
                    </b>
                  </span>
                </span>
              </span>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnimatedHeading;
