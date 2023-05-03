import { AuthProvider } from "lastHomework/contexts/AuthContext";
import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import LoginPage from "lastHomework/components/login";

test("it render login", async () => {
  const { getByText } = render(
    <AuthProvider>
      <LoginPage />
    </AuthProvider>
  );
  const title = getByText("Sign In");
  expect(title).toBeVisible();
});
