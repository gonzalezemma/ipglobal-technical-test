import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render, screen, waitFor } from "@testing-library/react";
import NotFound404 from "../../../src/pages/NotFound404";
import "@testing-library/jest-dom";

describe("404NotFound", () => {
  it("render component NotFound404 when the route non exist", async () => {
    const route = "/nonexist";
    render(
      <MemoryRouter initialEntries={[route]}>
        <NotFound404 />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText("404")).toBeInTheDocument();
      expect(screen.getByText("Not Found")).toBeInTheDocument();
    });
  });
});
