import {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import Navbar from "./FindByCloseName";

export default function List() {
    const [product, setProduct] = useState([])
    const navigate = useNavigate()
    const [search, setSearch] = useState('')


    useEffect(() => {
        axios.get('http://localhost:8080/product').then((response) => {
            setProduct(response.data)
        })
    }, [])


    const handleDetailProduct = (id) => {
        axios.patch('http://localhost:8080/product/' + id).then(
            (response) => {
                const detailProduct = response.data
                console.log(detailProduct)
                navigate('detail/' + id, {
                    state: {
                        detailProduct
                    }
                });
            });
    };

    const handleDeleteProduct = (id) => {
        axios.delete('http://localhost:8080/product/' + id).then(() => {
            setProduct(product.filter(elm => elm.id !== id))
        })

    }


    function inputSearch(input) {
        console.log(input);
        if (input !== undefined) {
            setSearch(input)
        }
    }

    useEffect(() => {
            axios
                .get(`http://localhost:8080/product/findByName?name=${search}`)
                .then((response) => {
                    const data = response.data
                    console.log(">>>>>>>DATA: ", data)
                    setProduct(data)
                    console.log(">>>>>>>LIST: ", product)
                })
                .catch((error) => {
                    console.log(error);
                });

        }
        , [product, search])


    return (
        <>
            <Navbar search={inputSearch}/>
            <Link to={'/createProduct'}>Create</Link>
            <table border={1}>
                <tbody>
                <tr>
                    <td>ID</td>
                    <td>Name</td>
                    <td>Price</td>
                    <td>Number</td>
                    <td>Category</td>
                    <td colSpan={2} style={{textAlign: "center"}}>Function</td>
                </tr>
                {product.map((item) => (
                    <tr style={{textAlign: "center"}}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>{item.number}</td>
                        <td>{item.category.name}</td>
                        <td>
                            <button onClick={() => handleDeleteProduct(item.id)}>Delete</button>
                        </td>
                        <td>
                            <button onClick={() => handleDetailProduct(item.id)}>Detail</button>
                        </td>
                        <td>
                            <Link to={'updateProduct/' + item.id}>
                                <button>Update</button>
                            </Link>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    )
}