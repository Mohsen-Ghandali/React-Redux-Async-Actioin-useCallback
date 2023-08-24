import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setPosts, setError } from "../../Redux/Posts/ActionPosts";


const Posts = () => {
    const { posts, loading, error } = useSelector(state => state.postsRoot)
    const dispatch = useDispatch()

    const fetchPosts = useCallback(async () => {
        try {
            const data = await fetch("https://jsonplaceholder.typicode.com/posts");
            let res = await data.json();
            dispatch(setPosts(res.slice(0, 5)));
            dispatch(setLoading(false));
        } catch (error) {
            dispatch(setError(error.message));
            dispatch(setLoading(true));
        }
    }, [dispatch]);
    
    useEffect(() => {
        fetchPosts();
    }, [fetchPosts]);
    

    return (
        <>
            <hr />
            <h2 className="text-center mt-5">React-Redux-Async-Action-JSONPlaceholder</h2>

            <div className="col-8 offset-2 my-5 bg-dark-subtle p-5 rounded-2 shadow-lg text-center">

                <div>
                    {loading && <div className="spinner-border spinner-border-sm "></div>}

                    {error && <h3 className="">{error}</h3>}

                    {posts && posts.map(elem => {
                        return (
                            <div key={elem.id}>
                                <h5 className="fw-bold">{elem.title}</h5>
                                <p>{elem.body}</p>
                                <hr/>
                            </div>
                        )
                    })}

                </div>

            </div>
        </>
    );
}

export default Posts;