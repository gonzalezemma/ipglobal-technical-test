import React from "react";
import { describe, expect, it } from "vitest";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { fireEvent, screen, waitFor } from "@testing-library/react";
import { renderWithProviders } from "../../../src/utils/test-utils";
import Router from "../../../src/components/App/Router";
import { API_URL_IMAGE } from "../../../src/constants/env";
import "@testing-library/jest-dom";

describe("Search", () => {
  it("render component and search one movie", async () => {
    const route = "/";

    renderWithProviders(
      <MemoryRouter initialEntries={[route]}>
        <Router />
      </MemoryRouter>
    );

    await waitFor(() => {
      const input = screen.getByRole("textbox") as HTMLInputElement;
      fireEvent.change(input, { target: { value: "die" } });

      expect(input.value).toBe("die");
    });

    const searchButton = screen.getByRole("button", { name: "" });

    fireEvent.click(searchButton);

    await waitFor(() => {
      const heading = screen.getByRole("heading", { name: "Movies with die" });
      expect(heading).toBeInTheDocument();

      const img = screen.getAllByRole("img", {
        name: /Puss in Boots: The Last Wish/i,
      }) as HTMLImageElement[];

      expect(img[0].src).toBe(
        `${API_URL_IMAGE}/kuf6dutpsT0vSVehic3EZIqkOBt.jpg`
      );
    });
  });
});
