import Image from "next/image";
import React from "react";

import AvatarOne from "../../../public/images/team/amr_safey.png";
import AvatarTwo from "../../../public/images/team/team-02.png";
import AvatarThree from "../../../public/images/team/team-03.png";

const Avatars = () => {
  return (
    <>
      <div className="wrapper">
        <div className="section-title">
          <h4 className="rbt-title-style-3">Avatars</h4>
        </div>
        <div className="row g-5 align-items-center">
          <div className="col-lg-2">
            <div className="rbt-avatars m-auto size-lg">
              <Image
                src={AvatarOne}
                width={109}
                height={119}
                alt="Author Images"
              />
            </div>
          </div>
          <div className="col-lg-2">
            <div className="rbt-avatars m-auto">
              <Image
                src={AvatarTwo}
                width={59}
                height={61}
                alt="Author Images"
              />
            </div>
          </div>
          <div className="col-lg-2">
            <div className="rbt-avatars m-auto size-sm">
              <Image
                src={AvatarThree}
                width={41}
                height={42}
                alt="Author Images"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Avatars;
