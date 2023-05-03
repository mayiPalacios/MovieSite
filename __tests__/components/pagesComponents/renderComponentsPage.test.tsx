import { AuthProvider } from "lastHomework/contexts/AuthContext";
import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import TvShow from "lastHomework/components/tvShow";
import SearchComponent from "lastHomework/components/searchComponent";
import Footer from "lastHomework/components/footer";
import FavoriteTv from "lastHomework/components/favoriteTv";
import FavoriteItem from "lastHomework/components/favoriteItem";
import Detailseason from "lastHomework/components/detailseason";
import DetailsTv from "lastHomework/components/detailsTv";
import DetailsMovie from "lastHomework/components/detailsMovie";
import PaginationDTVCast from "lastHomework/components/pagination/paginationDetailTVCast";
import AboutMe from "lastHomework/components/aboutMe";
import DetailPerson from "lastHomework/components/detailPerson";
import PaginationDTvCrew from "lastHomework/components/pagination/paginationDetailTvCrew";

test("it render TvShow", async () => {
  const { getByText } = render(
    <AuthProvider>
      <TvShow />
    </AuthProvider>
  );
  const title = getByText("Movies");
  expect(title).toBeVisible();
});

test("it render search", async () => {
  const { getByText } = render(
    <AuthProvider>
      <SearchComponent />
    </AuthProvider>
  );
  const title = getByText("Search");
  expect(title).toBeVisible();
});

test("it render footer", async () => {
  const { getByText } = render(
    <AuthProvider>
      <Footer />
    </AuthProvider>
  );
  const title = getByText("My Movie Site");
  expect(title).toBeVisible();
});

test("it render favorite tv show", async () => {
  const { getByText } = render(
    <AuthProvider>
      <FavoriteTv />
    </AuthProvider>
  );
  const title = getByText("TV SHOWS");
  expect(title).toBeVisible();
});

test("it render favorite movie", async () => {
  const { getByText } = render(
    <AuthProvider>
      <FavoriteItem />
    </AuthProvider>
  );
  const title = getByText("MOVIES");
  expect(title).toBeVisible();
});

test("it render season detail", async () => {
  const { getByText } = render(
    <AuthProvider>
      <Detailseason detailsTvId={2} seasonNumber={"22"} />
    </AuthProvider>
  );
  const title = getByText("SEASON 22");
  expect(title).toBeVisible();
});

test("it render tv detail", async () => {
  const { getByText } = render(
    <AuthProvider>
      <DetailsTv detailsTvId={2} />
    </AuthProvider>
  );
  const title = getByText("Similar TV SHOWS");
  expect(title).toBeVisible();
});

test("it render movie detail", async () => {
  const { getByText } = render(
    <AuthProvider>
      <DetailsMovie detailsId={2} />
    </AuthProvider>
  );
  const title = getByText("Similar Movies");
  expect(title).toBeVisible();
});

test("it render about me", async () => {
  const { getByText } = render(
    <AuthProvider>
      <AboutMe />
    </AuthProvider>
  );
  const title = getByText("Hello");
  expect(title).toBeVisible();
});

test("it render person detail", async () => {
  const { getByText } = render(
    <AuthProvider>
      <DetailPerson idPerson={2} />
    </AuthProvider>
  );
  const title = getByText("ID: 2");
  expect(title).toBeVisible();
});

test("it render pagination detail TVCast ", async () => {
  const { getByText } = render(
    <AuthProvider>
      <PaginationDTVCast detailsTvId={2} />
    </AuthProvider>
  );
  const title = getByText("Cast");
  expect(title).toBeVisible();
});

test("it render pagination detail TVCast ", async () => {
  const { getByText } = render(
    <AuthProvider>
      <PaginationDTvCrew detailsTvId={2} />
    </AuthProvider>
  );
  const title = getByText("Crew");
  expect(title).toBeVisible();
});
