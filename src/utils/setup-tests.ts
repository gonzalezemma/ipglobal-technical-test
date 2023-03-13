import { server } from "../../__mock__/api/server";
import "@testing-library/jest-dom";
import { cleanup } from "@testing-library/react";
import matchers from "@testing-library/jest-dom/matchers";

// make debug output for TestingLibrary Errors larger
//process.env.DEBUG_PRINT_LIMIT = "15000";

// extends Vitest's expect method with methods from react-testing-library
expect.extend(matchers);
window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };

beforeAll(() => server.listen({ onUnhandledRequest: "error" }));
afterAll(() => server.close());
afterEach(() => {
  server.resetHandlers();
  cleanup();
});
