import React from "react";
import { BrowserRouter } from "react-router-dom";
import { screen, waitFor } from "@testing-library/react";
import PopularMovies from "../../../src/pages/Home/components/PopularMovies";
import { renderWithProviders } from "../../../src/utils/test-utils";
import { moviesToTest } from "../../../__mock__/data/movies/movies";
import { API_URL_IMAGE } from "../../../src/constants/env";

describe("PopularMovies", () => {
  it("render component and show Popular movies", async () => {
    renderWithProviders(<PopularMovies movies={moviesToTest.results} />, {
      wrapper: BrowserRouter,
    });

    screen.getByText("Popular Movies");
    await waitFor(() => {
      const img = screen.getByRole("img", {
        name: /Puss in Boots: The Last Wish/i,
      }) as HTMLImageElement;

      expect(img.src).toBe(`${API_URL_IMAGE}/kuf6dutpsT0vSVehic3EZIqkOBt.jpg`);
    });

    await waitFor(() => {
      const img = screen.getByRole("img", {
        name: /Die Hart/i,
      }) as HTMLImageElement;

      expect(img.src).toBe(`${API_URL_IMAGE}/1EnBjTJ5utgT1OXYBZ8YwByRCzP.jpg`);
    });
  });
});
