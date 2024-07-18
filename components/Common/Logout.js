import { useDispatch } from "react-redux";
import { removeUser, clearUserFileList, clearTrainedFileList } from "@/app/store/Slices/userSlice";
import { clearHistory } from "@/app/store/Slices/chatSlice";
import { clearGraphAndSummaryHistory } from "@/app/store/Slices/graphAndSummarySlice";
import { clearQPaper } from "@/app/store/Slices/questionSlice";
import Link from "next/link";
import { removeResearch } from "@/app/store/Slices/researchSlice";

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
    dispatch(clearHistory());
    dispatch(clearGraphAndSummaryHistory());
    dispatch(clearQPaper());
    dispatch(clearUserFileList());
    dispatch(removeResearch());
    dispatch(clearTrainedFileList());
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
