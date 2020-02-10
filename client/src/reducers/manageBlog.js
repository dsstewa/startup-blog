import cuid from "cuid";
export const cuidFn = cuid;

export default function manageBlog(state = {}, action) {
  switch (action.type) {
    case "ADD_USER":
      console.log("user Added in Redux");
      return state;
    
    case "FETCHING_BLOGPOSTS":
      console.log("in the proccess of getting the post")
      return state;
    case 'ADD_POSTS':
    console.log("you are adding blog posts")
    return state;

    default:
      console.log("Default Returned");
      return state;
  }
}
