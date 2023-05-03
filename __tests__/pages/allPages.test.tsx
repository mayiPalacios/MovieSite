import { AuthProvider } from "lastHomework/contexts/AuthContext";
import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Page from "lastHomework/app/favorite/page";

test("it render Favorite Page", async () => {
  const { getByText } = render(
    <AuthProvider>
      <Page />
    </AuthProvider>
  );
  const title = getByText("Favorites");
  expect(title).toBeVisible();
});
