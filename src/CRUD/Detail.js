import {useLocation} from "react-router-dom";

export default function Detail() {
    const {state} = useLocation()

    return (
        <>

            <h1>{state.detail.id}</h1>
            <h1>{state.detail.name}</h1>
            <h1>{state.detail.price}</h1>
            <h1>{state.detail.number}</h1>
            <h1>{state.detail.category.name}</h1>

        </>
    )
}