import React from "react";
import { MemoryRouter } from "react-router-dom";
import { rest } from "msw";
import { server } from "../../../__mock__/api/server";
import { screen, waitFor } from "@testing-library/react";
import { renderWithProviders } from "../../../src/utils/test-utils";
import MoreMovies from "../../../src/pages/Home/components/MoreMovies";
import { API_URL_IMAGE } from "../../../src/constants/env";
import "@testing-library/jest-dom";

describe("MoreMovies", () => {
  it("render component More Movies", async () => {
    const route = "/";
    renderWithProviders(
      <MemoryRouter initialEntries={[route]}>
        <MoreMovies />
      </MemoryRouter>
    );

    expect(screen.getByRole("progressbar")).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText("More Movies")).toBeInTheDocument();
    });

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

  it("recives error on request", async () => {
    const route = "/";

    server.use(
      rest.get("*", (_req, res, ctx) =>
        res.once(
          ctx.status(500),
          ctx.json({ status_message: "Error on request" })
        )
      )
    );

    renderWithProviders(
      <MemoryRouter initialEntries={[route]}>
        <MoreMovies />
      </MemoryRouter>
    );

    const errorStatus = await screen.findByRole("heading", { name: "500" });
    const errorMessage = await screen.findByText("Error on request");

    await waitFor(() => {
      expect(errorStatus.textContent).toBe("500");
    });

    await waitFor(() => {
      expect(errorMessage.textContent).toBe("Error on request");
    });
  });
});
