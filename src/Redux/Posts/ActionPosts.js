import { SET_ERROR, SET_LOADING, SET_POSTS } from "./ActionTypePosts";

export const setPosts=(posts)=>{
    return{
        type:SET_POSTS,
        payload:posts
    }
}

export const setLoading=(status)=>{
    return{
        type:SET_LOADING,
        payload:status
    }
}
export const setError=(status)=>{
    return{
        type:SET_ERROR,
        payload:status
    }
}