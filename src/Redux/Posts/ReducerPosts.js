import { SET_POSTS, SET_LOADING, SET_ERROR } from "./ActionTypePosts"

const initialState = {
    posts: [],
    loading: true,
    error: false
}
const ReducerPosts = (state = initialState, action) => {
    switch (action.type) {
        case SET_POSTS: {
            return { ...state, posts: action.payload }
        }
        case SET_LOADING: {
            return { ...state, loading: action.payload }
        }
        case SET_ERROR: {
            return { ...state, error: action.payload }
        }
        default: {
            return state;
        }
    }
}
export default ReducerPosts