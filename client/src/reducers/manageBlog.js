import cuid from "cuid";
export const cuidFn = cuid;

export default function manageBlog(
  state = { blogposts: [], logger_in: false, loading: false },
  action
) {
  switch (action.type) {
    case "ADD_USER":
      console.log("user Added in Redux");
      return state;

    case "FETCHING_BLOGPOSTS":
      console.log("in the proccess of getting the post");

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

    default:
      console.log("Default Returned");
      return state;
  }
}
