import { baseApi } from "../../api/baseApi";

const communityApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getPosts: builder.query({
			query: () => "/posts",
			providesTags: ["Posts"],
		}),
		addPost: builder.mutation({
			query: (post) => ({
				url: "/posts",
				method: "POST",
				body: post,
			}),
			invalidatesTags: ["Posts"],
		}),
		addCommentOnPost: builder.mutation({
			query: ({ postId, comment }) => ({
				url: `/posts/${postId}/comments`,
				method: "POST",
				body: comment,
			}),
			invalidatesTags: ["Posts"],
		}),
	}),
});
export const {
	useGetPostsQuery,
	useAddPostMutation,
	useAddCommentOnPostMutation,
} = communityApi;
