import {useLocation} from "react-router-dom";

export default function DetailProduct() {
    const {state} = useLocation()
    return (

        <>
            <table border={1} style={{textAlign: "center"}}>
                <tbody>
                <tr>
                    <td>ID</td>
                    <td>{state.detailProduct.id}</td>
                </tr>
                <tr>
                    <td>Name</td>
                    <td>{state.detailProduct.name}</td>
                </tr>
                <tr>
                    <td>Price</td>
                    <td>{state.detailProduct.price}</td>
                </tr>
                <tr>
                    <td>Number</td>
                    <td>{state.detailProduct.number}</td>
                </tr>
                <tr>
                    <td>Category</td>
                    <td>{state.detailProduct.category.name}</td>
                </tr>
                </tbody>
            </table>

        </>
    )

}