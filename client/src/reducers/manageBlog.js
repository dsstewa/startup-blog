import cuid from "cuid";
export const cuidFn = cuid;

export default function manageBlog(
  state = { blogposts: [], logger_in: false, loading: false },
  action
) {
  switch (action.type) {
    case "ADD_USER":
      return state;

    case "FETCHING_BLOGPOSTS":
      return {
        ...state,
        blogposts: [...state.blogposts],
        loading: true
      };

    case "ADD_POSTS":
      return {
        ...state,
        blogposts: action.blogposts,
        loading: false
      };

    case "DELETE_POST":
      const blogposts = state.blogposts.filter(
        blog => blog.id !== action.payload
      );

      return {
        ...state,
        blogposts
      };
    default:
      console.log("Default Returned");
      return state;
  }
}
