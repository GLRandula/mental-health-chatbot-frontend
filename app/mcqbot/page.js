import BackToTop from "../backToTop";
import McqbotPage from "./index";

export const metadata = {
  title: "Chat Bot - LIORA",
  description: "",
};

const ChatbotLayout = () => {
  return (
    <>
      <McqbotPage />
      <BackToTop />
    </>
  );
};

export default ChatbotLayout;
