import React from "react";
import { MemoryRouter } from "react-router-dom";
import { rest } from "msw";
import { server } from "../../../__mock__/api/server";
import { screen, waitFor } from "@testing-library/react";
import { renderWithProviders } from "../../../src/utils/test-utils";
import Home from "../../../src/pages/Home";
import { API_URL_IMAGE } from "../../../src/constants/env";
import "@testing-library/jest-dom";

describe("Home", () => {
  it("render component Home, PopularMovies and MoreMovies", async () => {
    const route = "/";
    renderWithProviders(
      <MemoryRouter initialEntries={[route]}>
        <Home />
      </MemoryRouter>
    );

    expect(screen.getByRole("progressbar")).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText("More Movies")).toBeInTheDocument();
    });

    await waitFor(() => {
      const img = screen.getAllByRole("img", {
        name: /Puss in Boots: The Last Wish/i,
      }) as HTMLImageElement[];

      expect(img[0].src).toBe(
        `${API_URL_IMAGE}/kuf6dutpsT0vSVehic3EZIqkOBt.jpg`
      );
      expect(img[1].src).toBe(
        `${API_URL_IMAGE}/kuf6dutpsT0vSVehic3EZIqkOBt.jpg`
      );
    });
  });

  it("recives error on request", async () => {
    const route = "/";

    server.use(
      rest.get("*", (_req, res, ctx) =>
        res.once(
          ctx.status(404),
          ctx.json({ status_message: "Error on request" })
        )
      )
    );

    renderWithProviders(
      <MemoryRouter initialEntries={[route]}>
        <Home />
      </MemoryRouter>
    );

    const errorStatus = await screen.findByRole("heading", { name: "404" });
    const errorMessage = await screen.findByText("Error on request");

    await waitFor(() => {
      expect(errorStatus.textContent).toBe("404");
    });

    await waitFor(() => {
      expect(errorMessage.textContent).toBe("Error on request");
    });
  });
});
