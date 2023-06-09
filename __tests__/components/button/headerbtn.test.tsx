import React from "react";
import { render } from "@testing-library/react";

import { AuthProvider } from "lastHomework/contexts/AuthContext";

import "@testing-library/jest-dom";

import Home from "lastHomework/app/page";

test("it render home", async () => {
  const { getByText } = render(
    <AuthProvider>
      <Home />
    </AuthProvider>
  );
  const title = getByText("MayiMovies");
  expect(title).toBeVisible();
});
