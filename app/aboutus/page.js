import BackToTop from "../backToTop";
import AboutPage from "./index.js";

export const metadata = {
  title: "About Us - LIORA",
  description: "",
};

const AboutLayout = () => {
    return (
      <>
        <AboutPage />
        <BackToTop />
      </>
    );
  };
  
  export default AboutLayout;