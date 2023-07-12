import {createStore} from "redux";

const reducer = () => {
    return {
        name: "Hello World"
    }
}

const store = createStore(reducer)

export default store;