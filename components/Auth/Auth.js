"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Auth = (WrappedComponent) => {
  const AuthComponent = (props) => {
    const router = useRouter();
    const isAuthenticated = useSelector((state) => state.user.loggedUser);

    useEffect(() => {
      if (!isAuthenticated[0]) {
        router.push("/signin");
      }
    }, [isAuthenticated, router]);

    if (isAuthenticated[0]) {
      return <WrappedComponent {...props} />;
    } else {
      return null;
    }
  };

  return AuthComponent;
};

export default Auth;
