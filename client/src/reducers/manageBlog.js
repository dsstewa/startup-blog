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
      console.log("fetching blogposts aciton");
      return {
        ...state,
        blogposts: [...state.blogposts],
        loading: true
      };

    case "LOAD_BLOGPOSTS":
      console.log("Loading blogpost action");
      return {
        ...state,
        blogposts: action.blogposts,
        loading: false
      };

    case "ADD_POST":
      return {
        ...state,
        blogposts: [...state.blogposts, action.post.data.attributes],
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

    case "EDIT_POST":
      const updated = state.blogposts.map(post => {
        if (post.id === action.post) {
          post["editing"] = true;
          return post;
        } else {
          return post;
        }
      });
      console.log("You hit the update post Reducer");
      return {
        ...state,
        blogposts: updated
      };
    case "UPDATE_POST":
      debugger;
      return state;

    default:
      console.log("Default Returned");
      return state;
  }
}
