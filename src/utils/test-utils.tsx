import { PropsWithChildren, ReactElement } from "react";
import { Provider } from "react-redux";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { PreloadedState } from "@reduxjs/toolkit";
import { render, RenderOptions } from "@testing-library/react";
import { RootState, setupStore, store } from "store";

interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  preloadedState?: PreloadedState<RootState>;
  store?: store;
}

export const renderWithProviders = (
  ui: ReactElement,
  {
    preloadedState = {},
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) => {
  setupListeners(store.dispatch);

  const Wrapper = ({ children }: PropsWithChildren<{}>): ReactElement => {
    return <Provider store={store}>{children}</Provider>;
  };

  return {
    store,
    ...render(ui, { wrapper: Wrapper, ...renderOptions }),
  };
};
