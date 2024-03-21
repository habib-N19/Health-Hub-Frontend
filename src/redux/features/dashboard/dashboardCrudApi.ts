import { baseApi } from "../../api/baseApi";

const dashboardCrudApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		deleteSupply: builder.mutation({
			query: (_id) => ({
				url: `/supplies/${_id}`,
				method: "DELETE",
			}),
			invalidatesTags: ["Supply"],
		}),
		updateSupply: builder.mutation({
			query: ({ _id, supply }) => ({
				url: `/update-supply/${_id}`,
				method: "PUT",
				body: supply,
			}),
			invalidatesTags: ["Supply"],
		}),
		createSupply: builder.mutation({
			query: (supply) => ({
				url: "/create-supply",
				method: "POST",
				body: supply,
			}),
			invalidatesTags: ["Supply"],
		}),
	}),
});
export const {
	useDeleteSupplyMutation,
	useUpdateSupplyMutation,
	useCreateSupplyMutation,
} = dashboardCrudApi;
