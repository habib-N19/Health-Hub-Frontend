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
				url: "/supplies",
				method: "POST",
				body: supply,
			}),
			invalidatesTags: ["Supply"],
		}),
		createTestimonial: builder.mutation({
			query: (testimonial) => ({
				url: "/testimonials",
				method: "POST",
				body: testimonial,
			}),
		}),
		getDonorsData: builder.query({
			query: () => "/donors",
		}),
	}),
});
export const {
	useDeleteSupplyMutation,
	useUpdateSupplyMutation,
	useCreateSupplyMutation,
	useCreateTestimonialMutation,
	useGetDonorsDataQuery,
} = dashboardCrudApi;
