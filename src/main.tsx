import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/global-styles";
import { themeCorrect } from "./styles/Theme-correct.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ThemeProvider theme={themeCorrect}>
            <App />
            <GlobalStyles />
        </ThemeProvider>
    </React.StrictMode>
);
