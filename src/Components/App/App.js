import { Provider } from "react-redux";
import store from "../../Redux/Store"
import Counter from "../Counter/Counter";
import Age from "../Age/Age";
import Posts from "../Posts/Posts";


const App = () => {
    return (
        <>
            <Provider store={store} >
                <Posts />
                <Counter />
                <Age />
            </Provider>
        </>
    );
}

export default App;