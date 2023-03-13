import React from "react";
import { rest } from "msw";
import { screen } from "@testing-library/react";

import PopularMovies from "../../src/pages/Home/components/PopularMovies";
//import { server } from "./test/server";
import { renderWithProviders } from "../../src/utils/test-utils";
import { API_URL_IMAGE } from "../../src/constants/env";

describe("PopularMovies", () => {
  it("render component and show Popular movies", async () => {
    renderWithProviders(<PopularMovies />);

    screen.getByText("Películas más populares");
    screen.getByAltText("Puss in Boots: The Last Wish");

    const img = screen.getByRole("img", {
      name: /Puss in Boots: The Last Wish/i,
    }) as HTMLImageElement;

    expect(img.src).toBe(`${API_URL_IMAGE}/kuf6dutpsT0vSVehic3EZIqkOBt.jpg`);
  });
  /* 
  it("handles error response", async () => {
    // force msw to return error response
    server.use(
      rest.get(
        "https://pokeapi.co/api/v2/pokemon/bulbasaur",
        (req, res, ctx) => {
          return res(ctx.status(500));
        }
      )
    );

    renderWithProviders(<App />);

    screen.getByText("Loading...");

    await screen.findByText("Oh no, there was an error");
  }); */
});
