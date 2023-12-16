import React from "react";
import App from "./App";
import { createRoot } from "react-dom/client";

const mount = (el) => {
  const root = createRoot(el);
  root.render(<App />);
};

if (process.env.NODE_ENV === "development") {
  const containerElement = document.querySelector("#__dashboard-dev-root");

  if (containerElement) {
    mount(containerElement);
  }
}

export { mount };
