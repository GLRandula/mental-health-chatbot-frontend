import BackToTop from "../backToTop";
import SignupPage from "./index";

export const metadata = {
  title: "signup - LIORA",
  description: "",
};

const SignupLayout = () => {
  return (
    <>
      <SignupPage />
      <BackToTop />
    </>
  );
};

export default SignupLayout;
