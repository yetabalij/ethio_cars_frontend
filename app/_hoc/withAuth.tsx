"use client";

import { useRouter } from "next/navigation"; // For App Router's navigation
import { useState, useEffect } from "react";

const withAuth = (WrappedComponent: React.ComponentType) => {
  return function ProtectedRoute() {
    const router = useRouter();
    const [isAuthorized, setIsAuthorized] = useState(false);

    useEffect(() => {
      const session = localStorage.getItem("adminSession");
      if (session) {
        setIsAuthorized(true); // Allow access if session exists
      } else {
        router.push("/admin/login"); // Redirect to login if no session
      }
    }, [router]);

    // Render nothing or a loading indicator until session check is complete
    if (!isAuthorized) {
      return null; // Customize this loading message as needed
    }

    return <WrappedComponent />;
  };
};

export default withAuth;
