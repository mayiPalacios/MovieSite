import { AuthProvider } from "lastHomework/contexts/AuthContext";
import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Page from "lastHomework/app/movie/page";

test("it render movie page", async () => {
  const { getByTestId } = render(
    <AuthProvider>
      <Page />
    </AuthProvider>
  );
  const Container = getByTestId("movie-container");
  expect(Container).toBeInTheDocument();
});
