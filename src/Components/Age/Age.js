import { useSelector, useDispatch } from "react-redux";
import { incrementAge, decrementAge, resetAge} from "../../Redux/Age/ActionAge";


const Age = () => {
    const age = useSelector(state => state.ageRoot.age)
    const dispatch = useDispatch()
    return ( 
        <div className="col-6 offset-3 my-5 bg-dark-subtle p-5 rounded-2 shadow-lg text-center">
            <h3 className="mb-3">Age: {age}</h3>
            <button onClick={() => dispatch(incrementAge())} className="btn btn-success mx-2 shadow-sm">Increment age</button>
            <button onClick={() => dispatch(decrementAge())} className="btn btn-primary mx-2 shadow-sm">Decrement age</button>
            <button onClick={() => dispatch(resetAge())} className="btn btn-warning mx-2 shadow-sm">Reset age</button>
        </div>
     );
}
 
export default Age;