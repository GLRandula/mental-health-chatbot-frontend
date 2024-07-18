// for fetching user file list from the server
import API_CONFIG  from "@/components/API/index";

export const fileFetchUtil = async (user) => {
    try {
      const User_Store = process.env.NEXT_PUBLIC_BASE_API_URL+API_CONFIG.files;
      const response = await fetch( User_Store, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: user.id,
          username: user.email,
        }),
      });
      const data = await response.json();
      if (data.user_id) {
        return { success: true, filenames: data.filenames };
      } else {
        return { success: false, message: "Failed to fetch user files" };
      }
    } catch (error) {
      return { success: false, message: error.message };
    }
  };
  