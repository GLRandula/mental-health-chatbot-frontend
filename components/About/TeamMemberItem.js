import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
//import "@/components/tailwind.css";

const TeamMemberItem = ({ member }) => {
  return (
	<div className="team-member-section bg-black shadow-lg rounded-xl h-full p-2 dark:bg-slate-800">
      <img
        src={member.picture}
        alt={member.fullName}
        className="w-full h-auto rounded-lg"
      />
      <div className="content px-4">
        <h4 className="name text-2xl font-medium mt-4 mb-1">{member.fullName}</h4>
        <p className="designation mb-4 text-sm text-gray-600 dark:text-gray-300">{member.designation}</p>
        {/* <p className="bio opacity-50 mb-0 text-gray-500 dark:text-gray-400">{member.bio}</p> */}
        <div className="social-links mt-6">
          {member.socialLinks.map((item, i) => (
            <a
              href={item.href}
              className="social-icon inline-block opacity-60 transition duration-300 hover:translate-y-1 hover:opacity-100 mr-4"
              key={i}
            >
              {/* <FontAwesomeIcon icon={item.icon} /> */}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

TeamMemberItem.propTypes = {
	member: PropTypes.object.isRequired,
};

export default TeamMemberItem;
