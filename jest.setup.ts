import { fetch, Headers, Request, Response } from "cross-fetch";
import { cleanup } from "@testing-library/react";
import { server } from "./__mock__/api/server";
import matchers from "@testing-library/jest-dom/matchers";

global.fetch = fetch;
global.Headers = Headers;
global.Request = Request;
global.Response = Response;

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };

expect.extend(matchers);

beforeAll(() => server.listen({ onUnhandledRequest: "error" }));
afterEach(() => server.resetHandlers());
afterAll(() => {
  server.close();
  cleanup();
});
