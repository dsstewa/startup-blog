
export function fetchBlogPosts() {
    console.log("you hit the action")
    return (dispatch) => {
        dispatch({type: 'FETCHING_BLOGPOSTS'});
        fetch('http://localhost:3001/blogposts')
        .then(response => response.json())
        .then(blogposts => dispatch({type: 'ADD_POSTS', blogposts}))
    }
}