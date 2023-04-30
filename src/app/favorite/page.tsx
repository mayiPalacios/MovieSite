"use client";

import Footer from "lastHomework/components/footer";
import Header from "lastHomework/components/header";
import DetailsMovie from "lastHomework/components/detailsMovie";
import { useRouter } from "next/navigation";
import FavoriteItem from "lastHomework/components/favoriteItem";
import { AuthProvider } from "lastHomework/contexts/AuthContext";
import useAuth from "lastHomework/hooks/useAuth";

export default function Page({ params }: { params: { detailsId: number } }) {
  let prop = params.detailsId;
  const isLoggedIn = useAuth();
  const router = useRouter();

  return (
    <AuthProvider>
      {isLoggedIn ? (
        <>
          <Header />
          <FavoriteItem />
          <Footer />
        </>
      ) : (
        (router.push("/movie"), null)
      )}
    </AuthProvider>
  );
}
