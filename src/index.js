import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import MyApp from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
    <MyApp />
);