import React from 'react'

const Gradient = () => {
  return (
    <>
        <div className="wrapper">
          <div className="section-title">
            <h4 className="rbt-title-style-3">Color Gradient</h4>
          </div>

          <div className="row g-5">
            <div className="col-lg-3">
              <div className="color-box-inner">
                <div className="color-box bg-gradient-1 radius-10"></div>
                <div className="content mt--10">
                  <h6 className="title mb--0">Gradient 1</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

export default Gradient