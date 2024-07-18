// for fetching user file list from the server
import API_CONFIG  from "@/components/API/index";

export const fileDelUtil = async (user, filename) => {
    try {
      const User_Store = process.env.NEXT_PUBLIC_BASE_API_URL+API_CONFIG.fileDel;
      const response = await fetch( User_Store, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: user.id,
          username: user.email,
          filenames: [filename],
        }),
      });
      const data = await response.json();
      if (data.message) {
        return { success: true, message: data.message };
      } else {
        return { success: false, message: "Failed to Delete the File" };
      }
    } catch (error) {
      return { success: false, message: error.message };
    }
  };
  