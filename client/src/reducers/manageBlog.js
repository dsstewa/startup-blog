import cuid from 'cuid';
export const cuidFn = cuid; 

export default function manageBlog(state = {

}, action) {
    switch (action.type) {
        case 'ADD_USER':
            console.log("Add user returned")
            return state;

        default:
            console.log("Default Returned")
            return state;
    }
}