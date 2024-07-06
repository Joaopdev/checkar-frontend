import { themeCorrect } from "./src/styles/Theme-correct";

type Theme = typeof themeCorrect;

declare module "styled-components" {
	export interface DefaultTheme extends Theme {}
}

