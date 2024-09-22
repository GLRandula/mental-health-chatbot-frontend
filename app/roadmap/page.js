import BackToTop from "../backToTop";
import RoadmapPage from "./index";

export const metadata = {
  title: "Roadmap - LIORA",
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
