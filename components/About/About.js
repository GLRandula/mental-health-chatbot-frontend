"use client";

import React from "react";
import TeamMemberItem from "./TeamMemberItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
	faFacebookF,
	faLinkedinIn,
	faTwitter,
	faBehance,
} from "@fortawesome/free-brands-svg-icons";

const About = () => {
    return (
      <>
	  <div className="col-lg-12 mt_md--30 mt_sm--30" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
        <div className="rainbow-address" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <div className="icon">
		  <i class="fa-solid fa-eye"></i>
          </div>
          <div className="inner">
            <h4 className="title">OUR VISION</h4>
            <p className="b2">
			Our vision is to make our services accessible and user-friendly for all, regardless of <br />
			technological expertise, while offering advanced features for users with technical <br /> 
			knowledge to gain deeper insights.
            </p>
          </div>
        </div>
		</div>
		<div className="col-lg-12 mt_md--30 mt_sm--30" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
        <div className="rainbow-address" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <div className="icon">
		  <i class="fa-solid fa-crosshairs"></i>
          </div>
          <div className="inner">
            <h4 className="title">OUR MISSION</h4>
            <p className="b2">
			Our mission is to develop innovative AI technologies that empower users to efficiently <br /> 
			visualize, summarize, and interact with their documents. We aim to deliver seamless <br /> 
			and intuitive solutions that enhance productivity, foster deeper insights, and support <br /> 
			informed decision-making, while ensuring the highest standards of data security and <br />user privacy.
            </p>
          </div>
        </div>
		</div>
        <div className="team-section rainbow-section-gap-big rainbow-section-gapBottom">
          <div className="container">
            <div className="row justify-center mb-6 md:mb-12">
              <div className="col-md-12 text-center">
                <h2 className="title rainbow-title">Our Experts Team</h2>
                <p className="subtitle">
				Innovating the future with unparalleled expertise and a passion for excellence.
                </p>
              </div>
            </div>
            <div className="row text-center">
              {teamMembers.map((member, i) => (
                <div className="col-12 col-md-6 col-lg-2 mb-4" key={i}>
                  <TeamMemberItem member={member} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
}

export default About;


const teamMembers = [
	{
		picture: "https://avatars.githubusercontent.com/u/113744956?v=4",
		fullName: "Tharindu Damruwan",
		designation: "CS/2020/033",
		bio: "Subscribe Easy Tutorials Youtube Channel watch more videos",
		socialLinks: [
			{ icon: faFacebookF, href: "#" },
			{ icon: faLinkedinIn, href: "#" },
			{ icon: faTwitter, href: "#" },
			{ icon: faBehance, href: "#" },
		],
	},
	{
		picture: "https://avatars.githubusercontent.com/u/113119539?v=4",
		fullName: "Pawan Pinsara",
		designation: "CS/2020/005",
		bio: "Subscribe Easy Tutorials Youtube Channel watch more videos",
		socialLinks: [
			{ icon: faFacebookF, href: "#" },
			{ icon: faLinkedinIn, href: "#" },
			{ icon: faTwitter, href: "#" },
			{ icon: faBehance, href: "#" },
		],
	},
	{
		picture: "https://avatars.githubusercontent.com/u/110283259?v=4",
		fullName: "Lakith Randula",
		designation: "CS/2020/017",
		bio: "Subscribe Easy Tutorials Youtube Channel watch more videos",
		socialLinks: [
			{ icon: faFacebookF, href: "#" },
			{ icon: faLinkedinIn, href: "#" },
			{ icon: faTwitter, href: "#" },
			{ icon: faBehance, href: "#" },
		],
	},
	{
		picture: "https://avatars.githubusercontent.com/u/121743174?v=4",
		fullName: "Amindu Bhashana",
		designation: "CS/2020/007",
		bio: "Subscribe Easy Tutorials Youtube Channel watch more videos",
		socialLinks: [
			{ icon: faFacebookF, href: "#" },
			{ icon: faLinkedinIn, href: "#" },
			{ icon: faTwitter, href: "#" },
			{ icon: faBehance, href: "#" },
		],
	},
	
	{
		picture: "https://avatars.githubusercontent.com/u/117531838?v=4",
		fullName: "Yasisuru Pathum",
		designation: "CS/2020/006",
		bio: "Subscribe Easy Tutorials Youtube Channel watch more videos",
		socialLinks: [
			{ icon: faFacebookF, href: "#" },
			{ icon: faLinkedinIn, href: "#" },
			{ icon: faTwitter, href: "#" },
			{ icon: faBehance, href: "#" },
		],
	},
	{
		picture: "https://avatars.githubusercontent.com/u/83197935?v=4",
		fullName: "Pethum Jeewantha",
		designation: "CS/2020/027",
		bio: "Subscribe Easy Tutorials Youtube Channel watch more videos",
		socialLinks: [
			{ icon: faFacebookF, href: "#" },
			{ icon: faLinkedinIn, href: "#" },
			{ icon: faTwitter, href: "#" },
			{ icon: faBehance, href: "#" },
		],
	},
];