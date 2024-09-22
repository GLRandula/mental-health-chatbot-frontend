"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Sal from "sal.js";

import TeamData from "../../data/team.json";

const Team = () => {
  useEffect(() => {
    Sal();
  }, []);

  return (
    <>
      <div className="rbt-team-area bg-color-1 rainbow-section-gap-big pb--0">
        <div className="container">
          <div className="row row--15 mt_dec--30">
            {TeamData &&
              TeamData.team.slice(0, 3).map((data, index) => (
                <div
                  className="col-lg-4 col-md-6 col-sm-6 col-12 mt--30"
                  key={index}
                >
                  <div className="team">
                    <div className="thumbnail">
                      <Image
                        src={data.img}
                        width={415}
                        height={352}
                        alt="Team Images"
                      />
                    </div>
                    <div className="content">
                      <h4 className="title">{data.name}</h4>
                      <p className="designation">{data.profission}</p>
                    </div>
                    <ul className="social-icon">
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      <div className="rbt-team-area bg-color-1 rainbow-section-gap-big">
        <div className="container">
          <div className="row mb--60">
            <div className="col-lg-12">
              <div
                className="text-center section-title"
                data-sal="slide-up"
                data-sal-duration="400"
                data-sal-delay="150"
              >
                <h4 className="subtitle">
                  <span className="theme-gradient">LIORA team mbember</span>
                </h4>
                <h2 className="title w-600 mb--20">We Are Here To Serve You</h2>
              </div>
            </div>
          </div>

          <div className="row row--15 mt_dec--30">
            {TeamData &&
              TeamData.team.slice(3, 9).map((data, index) => (
                <div className="col-lg-4 col-md-6 col-12 mt--30" key={index}>
                  <div className="rbt-team team-style-default style-three rbt-hover">
                    <div className="inner">
                      <div className="thumbnail">
                        <Image
                          src={data.img}
                          width={364}
                          height={376}
                          alt="Corporate Template"
                        />
                      </div>
                      <div className="content">
                        <h2 className="title">{data.name}</h2>
                        <h6 className="subtitle">{data.profission}</h6>
                        <span className="team-form">
                          <i className="feather-map-pin"></i>
                          <span className="location">{data.location}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
