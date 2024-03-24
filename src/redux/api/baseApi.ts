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
	baseUrl: "https://health-hub-server-ten.vercel.app/api/v1",
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
	tagTypes: ["Supply", "Posts", "Volunteers"],
	endpoints: () => ({}),
});
