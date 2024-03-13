import {
	// BaseQueryApi,
	// BaseQueryFn,
	// DefinitionType,
	// FetchArgs,
	createApi,
	fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
const baseQuery = fetchBaseQuery({
	baseUrl: "http://localhost:5000/api/v1",
	credentials: "include",
	prepareHeaders: (headers, { getState }) => {
		const token = (getState() as RootState).auth.token;
		if (token) {
			headers.set("authorization", `${token}`);
		}
		return headers;
	},
});
// const baseQueryWithRefreshToken :BaseQueryFn<FetchArgs, BaseQueryApi, DefinitionType> = async (args, api, extraOptions) :Promise<any> => {

export const baseApi = createApi({
	reducerPath: "baseApi",
	baseQuery: baseQuery,
	endpoints: () => ({}),
});