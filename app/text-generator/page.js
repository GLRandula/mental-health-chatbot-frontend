import BackToTop from "../backToTop";
import TextGeneratorPage from "./index";

export const metadata = {
  title: "AI Visualizer - ViewMo",
  description: "",
};

const TextGeneratorLayout = () => {
  return (
    <>
      <TextGeneratorPage />
      <BackToTop />
    </>
  );
};

export default TextGeneratorLayout;
