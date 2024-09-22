import BackToTop from "../backToTop";
import DoctorDetailsPage from "./index";

export const metadata = {
  title: "Doctor Details - ViewMo",
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

