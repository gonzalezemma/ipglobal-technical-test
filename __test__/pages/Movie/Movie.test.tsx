import React from "react";
import { describe, expect, it } from "vitest";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { fireEvent, screen, waitFor } from "@testing-library/react";
import { renderWithProviders } from "../../../src/utils/test-utils";
import Movie from "../../../src/pages/Movie";
import { API_URL_IMAGE } from "../../../src/constants/env";
import "@testing-library/jest-dom";

describe("Movie", () => {
  it("render component Movie with total information", async () => {
    const route = "/movie/1077280";

    renderWithProviders(
      <MemoryRouter initialEntries={[route]}>
        <Routes>
          <Route path="movie/:id" element={<Movie />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByRole("progressbar")).toBeInTheDocument();

    await waitFor(() => {
      const img = screen.getByAltText("background") as HTMLImageElement;

      expect(img.src).toBe(`${API_URL_IMAGE}/pxJbfnMIQQxCrdeLD0zQnWr6ouL.jpg`);
    });
    await waitFor(() => {
      const img = screen.getByAltText("poster") as HTMLImageElement;

      expect(img.src).toBe(`${API_URL_IMAGE}/1EnBjTJ5utgT1OXYBZ8YwByRCzP.jpg`);
    });

    await waitFor(() => {
      expect(screen.getByText("Die Hart (2023)")).toBeInTheDocument();
      expect(screen.getByText("2023-02-22")).toBeInTheDocument();
    });
  });

  it("rate movie success", async () => {
    const route = "/movie/1077280";

    renderWithProviders(
      <MemoryRouter initialEntries={[route]}>
        <Routes>
          <Route path="movie/:id" element={<Movie />} />
        </Routes>
      </MemoryRouter>
    );

    await waitFor(() => {
      const headingRateThisMovie = screen.getByRole("heading", {
        name: "Rate this movie",
      });
      expect(headingRateThisMovie).toBeInTheDocument();
    });

    const star = screen.getAllByTestId("StarIcon"); // octava estrella = 8 puntos
    fireEvent.click(star[46]);

    await waitFor(() => {
      const headingYourScore = screen.getByRole("heading", {
        name: "Your score",
      });
      expect(headingYourScore).toBeInTheDocument();
    });
  });
});
