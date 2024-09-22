import BackToTop from "../backToTop";
import ChatbotPage from "./index";

export const metadata = {
  title: "Chat bot - LIORA",
  description: "",
};

const ChatbotLayout = () => {
  return (
    <>
      <ChatbotPage />
      <BackToTop />
    </>
  );
};

export default ChatbotLayout;
