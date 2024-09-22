import BackToTop from "../backToTop";
import DoctorDetailsPage from "./index";

export const metadata = {
  title: "Doctor Details - LIORA",
  description: "",
};

const DoctorDetailsLayout = () => {
  return (
    <>
      <DoctorDetailsPage />
      <BackToTop />
    </>
  );
};

export default DoctorDetailsLayout;

