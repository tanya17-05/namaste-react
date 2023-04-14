import React from "react";
import { createRoot } from "react-dom/client";

const child1 = React.createElement(
  "div",
  { id: "kid1", key: "1" },
  React.createElement("span", {}, "Hi there, I'm kid 1")
);
const child2 = React.createElement(
  "div",
  { id: "kid2", key: "2" },
  "Hi there, I'm kid 2"
);

const parent = React.createElement("div", { id: "heading" }, [
  child1,
  child2,
  React.createElement("span", { key: "3" }, "Hi there, I'm kid 3"),
]);

const root = createRoot(document.getElementById("root"));
root.render(parent);
