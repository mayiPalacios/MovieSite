"use client";

import Footer from "lastHomework/components/footer";
import Header from "lastHomework/components/header";
import { useRouter } from "next/navigation";
import FavoriteItem from "lastHomework/components/favoriteItem";

import useAuth from "lastHomework/hooks/useAuth";
import { useEffect } from "react";
import FavoriteTv from "lastHomework/components/favoriteTv";

export default function Page({}) {
  const router = useRouter();
  const isLoggedIn = useAuth();

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/");
    }
  });

  return (
    <>
      <Header />
      <FavoriteItem />
      <FavoriteTv />
      <Footer />
    </>
  );
}
