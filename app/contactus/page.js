import BackToTop from "../backToTop";
import ContactPage from "./index.js";

export const metadata = {
  title: "Contact Us - ViewMo",
  description: "",
};

const ContactLayout = () => {
    return (
      <>
        <ContactPage />
        <BackToTop />
      </>
    );
  };
  
  export default ContactLayout;