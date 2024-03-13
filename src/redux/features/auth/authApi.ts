import { baseApi } from "../../api/baseApi";

export const authApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		login: builder.mutation({
			query: (userInfo) => ({
				url: "/login",
				method: "POST",
				body: userInfo,
			}),
		}),
		register: builder.mutation({
			query: (userInfo) => ({
				url: "/register",
				method: "POST",
				body: userInfo,
			}),
		}),
	}),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
