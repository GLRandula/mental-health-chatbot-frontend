import BackToTop from "../backToTop";
import ContactPage from "./index.js";

export const metadata = {
  title: "Contact Us - LIORA",
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