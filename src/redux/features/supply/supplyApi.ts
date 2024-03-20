import { baseApi } from "../../api/baseApi";

export const supplyApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		topSupplies: builder.query({
			query: () => ({
				url: "/top-supplies",
				method: "GET",
			}),
		}),
		supplies: builder.query({
			query: () => ({
				url: "/supplies",
				method: "GET",
			}),
		}),
	}),
});
export const { useSuppliesQuery, useTopSuppliesQuery } = supplyApi;
