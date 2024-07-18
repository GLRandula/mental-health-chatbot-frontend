// for fetching user file list from the server
import API_CONFIG  from "@/components/API/index";

export const fileTrainUtil = async (user, filename) => {
    try {
      const User_Store = process.env.NEXT_PUBLIC_BASE_API_URL+API_CONFIG.fileTrain;
      const response = await fetch( User_Store, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: user.id,
          name: user.name,
          email: user.email,
          vectorstore: true,
          filenames: [filename],
        }),
      });
      const data = await response.json();
      if (data.vectorstore) {
        return { success: true, message: "Success", fname: filename };
      } else {
        return { success: false, message: "Failed to Use the File" };
      }
    } catch (error) {
      return { success: false, message: error.message };
    }
  };
  