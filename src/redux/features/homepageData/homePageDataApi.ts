import { baseApi } from "../../api/baseApi";

export const homepageDataApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		topProviders: builder.query({
			query: () => ({
				url: "/top-provider-testimonials",
				method: "GET",
			}),
		}),
	}),
});
export const { useTopProvidersQuery } = homepageDataApi;
