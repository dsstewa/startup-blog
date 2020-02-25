import cuid from "cuid";
export const cuidFn = cuid;

export default function manageBlog(state = { posts: [] }, action) {
  switch (action.type) {
    case "ADD_USER":
      return state;

    case "FETCHING_BLOGPOSTS":
      console.log("fetching blogposts aciton");
      return {
        ...state,
        posts: [...state.posts],
        loading: true
      };

    case "LOAD_BLOGPOSTS":
      console.log("Loading blogpost action");
      return {
        ...state,
        posts: action.blogposts,
        loading: false
      };

    case "ADD_POST":
      return {
        ...state,
        posts: [...state.posts, action.post.data.attributes],
        loading: false
      };

    case "DELETE_POST":
      const blogposts = state.posts.filter(blog => blog.id !== action.payload);

      return {
        ...state,
        posts: blogposts
      };

    case "EDIT_POST":
      const updated = state.posts.map(post => {
        if (post.id === action.post) {
          return { ...post, editing: true };
        } else {
          return post;
        }
      });
      console.log("You hit the update post Reducer");
      return {
        ...state,
        posts: updated
      };
    case "UPDATE_POST":
      const updatepost = state.posts.map(post => {
        if (post.id === action.payload.id) {
          return action.payload;
        } else {
          return post;
        }
      });

      return {
        ...state,
        posts: updatepost
      };

    default:
      console.log("Default Returned");
      return state;
  }
}
