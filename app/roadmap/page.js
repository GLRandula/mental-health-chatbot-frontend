import BackToTop from "../backToTop";
import RoadmapPage from "./index";

export const metadata = {
  title: "Roadmap - ViewMo",
  description: "",
};

const RoadmapLayout = () => {
  return (
    <>
      <RoadmapPage />
      <BackToTop />
    </>
  );
};

export default RoadmapLayout;
