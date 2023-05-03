import { AuthProvider } from "lastHomework/contexts/AuthContext";
import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Page from "lastHomework/app/login/page";
test("it render login page", async () => {
  const { getByTestId } = render(
    <AuthProvider>
      <Page />
    </AuthProvider>
  );
  const loginContainer = getByTestId("login-container");
  expect(loginContainer).toBeInTheDocument();
});
