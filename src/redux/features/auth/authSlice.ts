import { createSlice } from "@reduxjs/toolkit";
import { TAuthState } from "../../../types";
import { RootState } from "../../store";

const initialState: TAuthState = {
	user: null,
	token: null,
	defaultValues: {
		email: "admin@admin.com",
		password: "123123",
	},
};
const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setUser: (state, action) => {
			state.user = action.payload.user;
			state.token = action.payload.token;
		},
		setDefaultValue: (state, action) => {
			const { email, password } = action.payload;
			state.defaultValues = {
				email,
				password,
			};
		},

		logout: (state) => {
			state.user = null;
			state.token = null;
		},
	},
});
export const { setUser, logout, setDefaultValue } = authSlice.actions;
export default authSlice.reducer;
export const useCurrentToken = (state: RootState) => state.auth.token;
export const selectUser = (state: RootState) => state.auth.user;
