import React from "react";

const Typography = () => {
  return (
    <>
        <div className="wrapper">
          <div className="section-title">
            <h4 className="rbt-title-style-3">Typography</h4>
          </div>

          <div className="row g-5">
            <div className="col-lg-6">
              <h1>H1. Heading 1</h1>
              <h2>H2. Heading 2</h2>
              <h3>H3. Heading 3</h3>
              <h4>H4. Heading 4</h4>
              <h5>H5. Heading 5</h5>
              <h6>H6. Heading 6</h6>
            </div>
            <div className="col-lg-6">
              <p className="b1">
                B1- Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Similique non ipsam reiciendis.
              </p>
              <p className="b2">
                B2- Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Similique non ipsam reiciendis.
              </p>
              <p className="b3">
                B3- Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Similique non ipsam reiciendis.
              </p>
              <p>
                Befault- Lorem, ipsum dolor sit amet consectetur adipisicing
                elit. Similique non ipsam reiciendis.
              </p>
            </div>
          </div>

          <div className="row mt--40">
            <div className="section-title">
              <h4 className="rbt-title-style-3">Heading Style</h4>
            </div>
            <div className="col-lg-12">
              <div className="section-title text-center">
                <h2 className="title">Heading Style One.</h2>
              </div>
            </div>
            <div className="col-lg-12 mt--60">
              <div className="section-title text-center">
                <h2 className="rbt-title-style-2">Heading Style Two.</h2>
              </div>
            </div>
            <div className="col-lg-12 mt--60">
              <div className="section-title text-center">
                <h2 className="rbt-title-style-3">Heading Style Three.</h2>
              </div>
            </div>
            <div className="col-lg-12 mt--60">
              <div className="section-title text-center">
                <h2 className="rbt-short-title">Heading Short Title.</h2>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default Typography;
