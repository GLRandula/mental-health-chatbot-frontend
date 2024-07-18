import React from "react";

const FaqAccordion = ({ acc, num }) => {
  return (
    <>
      <div className="accordion-item card ">
        <h2 className="accordion-header card-header" id={`heading${num + 1}`}>
          <button
            className={`accordion-button ${!acc.isExpand ? "collapsed" : ""}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#collapse${num + 1}`}
            aria-expanded={acc.isExpand ? "true" : "false"}
            aria-controls={`collapse${num + 1}`}
          >
            {acc.title}
          </button>
        </h2>
        <div
          id={`collapse${num + 1}`}
          className={`accordion-collapse collapse ${
            acc.isExpand ? "show" : ""
          }`}
          aria-labelledby={`heading${num + 1}`}
          data-bs-parent="#accordionExamplea"
        >
          <div className="accordion-body card-body">{acc.desc}</div>
        </div>
      </div>
    </>
  );
};

export default FaqAccordion;
