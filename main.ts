import React from "npm:react";
import { renderToString } from "npm:react-dom/server";
import App from "./App.tsx";

// Rename this file to `main.tsx` to enable usage of JSX
// const html = renderToString(<App />);
const html = renderToString(React.createElement(App));

console.log(html);
