import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { themeCorrect } from "./Theme-correct";

export const renderTheme = (children) => {
    return render(
        <ThemeProvider theme={themeCorrect}>{children}</ThemeProvider>
    );
};
