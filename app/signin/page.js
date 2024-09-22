import BackToTop from "../backToTop";
import SigninPage from "./index";

export const metadata = {
  title: "Sign In - LIORA",
  description: "Sign In Description",
};

const SigninLayout = () => {
  return (
    <>
      <SigninPage />
      <BackToTop />
    </>
  );
};

export default SigninLayout;
