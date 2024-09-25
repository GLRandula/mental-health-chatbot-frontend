import { useDispatch } from "react-redux";
import { removeUser, clearUserFileList, clearTrainedFileList } from "@/app/store/Slices/userSlice";
import { cleanChatVariables } from "@/app/store/Slices/chatSlice";
import Link from "next/link";

const Logout = ({btnClass}) => {
  const dispatch = useDispatch();
  
  const deleteCookie = (name) => {
    document.cookie = name + '=; Max-Age=-99999999;';  
  };

  const clearAllCookies = () => {
    const cookies = document.cookie.split("; ");
    for (const cookie of cookies) {
      const eqPos = cookie.indexOf("=");
      const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      deleteCookie(name);
    }
  };

  const userLoggedout = () => {
    clearAllCookies();

    dispatch(removeUser());
    dispatch(cleanChatVariables());
    localStorage.removeItem("user");
  };

  return (
    <div className="header-btn" onClick={userLoggedout}>
      <Link className={`${btnClass}`} href="/home">
        <span>LOGOUT</span>
      </Link>
    </div>
  );
};

export default Logout;
