import { baseApi } from "../../api/baseApi";

const volunteerAPi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getVolunteers: builder.query({
			query: () => "/volunteers",
		}),
		getVolunteeringOpportunities: builder.query({
			query: () => "/volunteering-posts",
		}),
		addVolunteer: builder.mutation({
			query: (volunteer) => ({
				url: "/volunteers",
				method: "POST",
				body: volunteer,
			}),
			invalidatesTags: ["Volunteers"],
		}),
	}),
});

export const {
	useGetVolunteersQuery,
	useGetVolunteeringOpportunitiesQuery,
	useAddVolunteerMutation,
} = volunteerAPi;
