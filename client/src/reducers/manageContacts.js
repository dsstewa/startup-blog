import cuid from "cuid";
export const cuidFn = cuid;

export default function manageContacts(
  state = { blogposts: [], logger_in: false, loading: false },
  action
) {
  switch (action.type) {
    case "ADD_CONTACT":
      console.log("YOu hit the add contact reducer");
      return state;

    default:
      console.log("Default Returned");
      return state;
  }
}
