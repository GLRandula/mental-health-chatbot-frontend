import BackToTop from "../backToTop";
import ChatbotPage from "./index";

export const metadata = {
  title: "Chat bot - ViewMo",
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
