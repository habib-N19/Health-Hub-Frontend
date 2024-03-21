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
	baseUrl:
		"https://l2-b2-frontend-path-assignment-6-server-starter-pack-xi.vercel.app/api/v1",
	credentials: "include",
	prepareHeaders: (headers, { getState }) => {
		const token = (getState() as RootState).auth.token;
		if (token) {
			headers.set("authorization", `${token}`);
		}
		return headers;
	},
});

export const baseApi = createApi({
	reducerPath: "baseApi",
	baseQuery: baseQuery,
	tagTypes: ["Supply"],
	endpoints: () => ({}),
});
