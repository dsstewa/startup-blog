export function newContact(data) {
  const postData = {
    firstname: data.firstname,
    lastname: data.lastname,
    email: "Bill",
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
    fetch("http://localhost:3001/contacts", configObj)
      .then(response => response.json())
      .then(post => dispatch({ type: "ADD_CONTACT", post }));
  };
}
