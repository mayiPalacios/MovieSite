import { AuthProvider } from "lastHomework/contexts/AuthContext";
import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Page from "lastHomework/app/meDetails/page";

test("it render me details page", async () => {
  const { getByTestId } = render(
    <AuthProvider>
      <Page />
    </AuthProvider>
  );
  const Container = getByTestId("meDetails-container");
  expect(Container).toBeInTheDocument();
});
