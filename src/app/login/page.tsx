"use client";
import Footer from "lastHomework/components/footer";
import LoginPage from "lastHomework/components/login";
import { useRouter } from "next/navigation";

import useAuth from "lastHomework/hooks/useAuth";
import { useEffect } from "react";
const page = ({}) => {
  const router = useRouter();
  const isLoggedIn = useAuth();

  useEffect(() => {
    if (isLoggedIn) {
      router.push("/");
    }
  });
  return (
    <div data-testid="login-container">
      <LoginPage />
      <Footer />
    </div>
  );
};

export default page;
