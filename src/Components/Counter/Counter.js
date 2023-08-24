import { useSelector, useDispatch } from "react-redux";
import { incrementCounter, decrementCounter, resetCounter } from "../../Redux/Counter/ActionCounter";


const Counter = () => {
    const counter = useSelector(state => state.counterRoot.count)
    const dispatch = useDispatch()
    return (
        <>
            <h2 className="text-center mt-5">React-Redux-Multi Reducer-combineReducers</h2>
            <div className="col-6 offset-3 my-5 bg-dark-subtle p-5 rounded-2 shadow-lg text-center">
                <h3 className="mb-3">Counter: {counter}</h3>
                <button onClick={() => dispatch(incrementCounter())} className="btn btn-success mx-2 shadow-sm">Increment</button>
                <button onClick={() => dispatch(decrementCounter())} className="btn btn-primary mx-2 shadow-sm">Decrement</button>
                <button onClick={() => dispatch(resetCounter())} className="btn btn-warning mx-2 shadow-sm">Reset</button>
            </div>
        </>
    );
}


export default Counter;