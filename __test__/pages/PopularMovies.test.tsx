import React from "react";
import { screen, waitFor } from "@testing-library/react";
import PopularMovies from "../../src/pages/Home/components/PopularMovies";
import { renderWithProviders } from "../../src/utils/test-utils";
import { popularMovies } from "../../__mock__/data/movies/popularMovies";
import { API_URL_IMAGE } from "../../src/constants/env";

describe("PopularMovies", () => {
  it("render component and show Popular movies", async () => {
    renderWithProviders(<PopularMovies movies={popularMovies.results} />);

    screen.getByText("Películas más populares");
    await waitFor(() => {
      const img = screen.getByRole("img", {
        name: /Puss in Boots: The Last Wish/i,
      }) as HTMLImageElement;

      expect(img.src).toBe(`${API_URL_IMAGE}/kuf6dutpsT0vSVehic3EZIqkOBt.jpg`);
    });
  });
});
