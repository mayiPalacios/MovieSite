import { AuthProvider } from "lastHomework/contexts/AuthContext";
import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Page from "lastHomework/app/search/page";

test("it render search page", async () => {
  const { getByTestId } = render(
    <AuthProvider>
      <Page />
    </AuthProvider>
  );
  const Container = getByTestId("search-container");
  expect(Container).toBeInTheDocument();
});
