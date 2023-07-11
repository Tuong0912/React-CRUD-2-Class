import {useEffect, useState} from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";

export default function ListProduct() {
    const [product, setProduct] = useState([])
    console.log(product)
    const [searchTerm, setSearchTerm] = useState("");

    let navigate = useNavigate()

    useEffect(() => {
        axios.get("http://localhost:8080/product").then((response) => {
            // console.log(product)
            setProduct(response.data)
        })
    }, [])

    const handleDelete = (id) => {
        axios.delete('http://localhost:8080/product/' + id).then(() => {
            setProduct(product.filter(s => (s.id !== id)))
        })
    }

    const detail = (id) => {
        console.log(id)
        axios.patch('http://localhost:8080/product/' + id).then(
            (response) => {
                const detail = response.data
                console.log(detail);
                navigate('detail/' + id,
                    {
                        state: {
                            detail
                        }
                    });
            });
    };

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const results = product.filter((item) =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setProduct(results);
    };


    return (
        <>
            <table>
                <tbody>
                <tr>
                    <td>ID</td>
                    <td>Name</td>
                    <td>Price</td>
                    <td>Number</td>
                    <td>Category</td>
                </tr>
                </tbody>
                <tbody>
                {product.map((item) => {
                    return (
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.number}</td>
                            <td>{item.category.name}</td>
                            <td>
                                <button onClick={() => handleDelete(item.id)}>Delete</button>
                            </td>
                            <td>
                                <button onClick={() => detail(item.id)}>Detail</button>
                            </td>
                            <td><Link to={'update/' + item.id}>
                                <button>Update</button>
                            </Link>

                            </td>
                        </tr>
                    )
                })}</tbody>
                <tr>
                    <td><Link to={"/create"}>Create</Link></td>
                </tr>
            </table>


            <div>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={searchTerm} onChange={handleChange}/>
                    <button type="submit">Search</button>
                </form>
            </div>
        </>
    )
}