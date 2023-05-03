import { AuthProvider } from "lastHomework/contexts/AuthContext";
import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import Movie from "lastHomework/components/movie";

test("it render Movie", async () => {
  const { getByText } = render(
    <AuthProvider>
      <Movie />
    </AuthProvider>
  );
  const title = getByText("Movies");
  expect(title).toBeVisible();
});
