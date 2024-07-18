import React from "react";

const Pagination = () => {
  return (
    <>
        <div className="wrapper">
          <div className="section-title">
            <h4 className="rbt-title-style-3">Pagination</h4>
          </div>
          <div className="row g-5">
            <div className="col-lg-12">
              <nav>
                <ul className="rbt-pagination justify-content-start">
                  <li>
                    <a href="#" aria-label="Previous">
                      <i className="feather-chevron-left"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">1</a>
                  </li>
                  <li className="active">
                    <a href="#">2</a>
                  </li>
                  <li>
                    <a href="#">3</a>
                  </li>
                  <li>
                    <a href="#" aria-label="Next">
                      <i className="feather-chevron-right"></i>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-lg-12">
              <nav>
                <ul className="rbt-pagination justify-content-center">
                  <li>
                    <a href="#" aria-label="Previous">
                      <i className="feather-chevron-left"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">1</a>
                  </li>
                  <li className="active">
                    <a href="#">2</a>
                  </li>
                  <li>
                    <a href="#">3</a>
                  </li>
                  <li>
                    <a href="#" aria-label="Next">
                      <i className="feather-chevron-right"></i>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-lg-12">
              <nav>
                <ul className="rbt-pagination justify-content-end">
                  <li>
                    <a href="#" aria-label="Previous">
                      <i className="feather-chevron-left"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">1</a>
                  </li>
                  <li className="active">
                    <a href="#">2</a>
                  </li>
                  <li>
                    <a href="#">3</a>
                  </li>
                  <li>
                    <a href="#" aria-label="Next">
                      <i className="feather-chevron-right"></i>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
    </>
  );
};

export default Pagination;
