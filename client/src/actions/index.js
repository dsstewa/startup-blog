export const fetchBlogPosts = () => {
  return dispatch => {
    dispatch({ type: "FETCHING_BLOGPOSTS" });
    fetch("http://localhost:3001/blogposts")
      .then(response => response.json())
      .then(blogposts => dispatch({ type: "LOAD_BLOGPOSTS", blogposts }));
  };
};

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
    fetch("http://localhost:3001/blogposts", configObj)
      .then(response => response.json())
      .then(post => dispatch({ type: "ADD_POST", post }));
  };
}

export const deleteBlogPost = post => {
  const formData = {
    id: post
  };
  const configObj = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(formData)
  };

  return dispatch => {
    fetch(`http://localhost:3001/blogposts/${post}`, configObj)
      .then(response => response.json())
      .then(response => {
        dispatch({ type: "DELETE_POST", payload: post });
      });
  };
};

export const editBlogPost = post => {
  return dispatch => {
    dispatch({ type: "EDIT_POST", post });
  };
};

export const updateBlogPost = post => {
  const formData = {
    subject: post.subject,
    content: post.content
  };
  const configObj = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(formData)
  };
  return dispatch => {
    fetch(`http://localhost:3001/blogposts/${post.id}`, configObj)
      .then(response => response.json())
      .then(response => {
        dispatch({ type: "UPDATE_POST", payload: post });
      })
      .catch(error => {
        console.error(error);
      });
  };
};
