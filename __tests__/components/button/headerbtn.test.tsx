import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { renderHook } from "@testing-library/react";
import { AuthContext, AuthProvider } from "lastHomework/contexts/AuthContext";
import useAuth from "lastHomework/hooks/useAuth";
import "@testing-library/jest-dom";
import { Router } from "next/router";
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
