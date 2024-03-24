import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const getThemePreference = (): string => {
	if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
		return "dark";
	}
	return "light";
};
type TThemeState = {
	theme: string;
};
const initialState: TThemeState = {
	theme: localStorage.getItem("theme") || getThemePreference(),
};
export const themeSlice = createSlice({
	name: "theme",
	initialState,
	reducers: {
		toggleTheme: (state) => {
			state.theme = state.theme === "light" ? "dark" : "light";
			localStorage.setItem("theme", state.theme);
		},
		setTheme: (state, action: PayloadAction<string>) => {
			state.theme = action.payload;
			localStorage.setItem("theme", state.theme);
		},
	},
});

export const { setTheme } = themeSlice.actions;
export const selectTheme = (state: { theme: TThemeState }) => state.theme.theme;
export default themeSlice.reducer;
