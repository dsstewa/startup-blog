export function fetchBlogPosts() {
  return dispatch => {
    dispatch({ type: "FETCHING_BLOGPOSTS" });
    fetch("http://localhost:3001/blogposts")
      .then(response => response.json())
      .then(blogposts => dispatch({ type: "ADD_POSTS", blogposts }));
  };
}

export function newBlogPosts(data) {
  const postData = {
    subject: data.subject,
    content: data.content,
    firstname: "Bill",
    lastname: "Ron",
    uuid: "1234"
  };

  const configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(postData)
  };
  return dispatch => {
    fetch("http://localhost:3001/blogposts", configObj);
  };
}

export function deleteBlogPost(post) {
  debugger;
  console.log("you hit the delete action");
}
