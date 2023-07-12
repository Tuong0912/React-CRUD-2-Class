import {Link, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {Field, Form, Formik} from "formik";

export default function UpdateProduct() {
    const {id} = useParams()
    const navigate = useNavigate()
    const [category, setCategory] = useState([])
    console.log(category)
    const [product, setProduct] = useState({})



    useEffect(() => {
        axios.patch('http://localhost:8080/product/' + id).then((response) => {
            setProduct(response.data)
            console.log(product)
        })
    }, [id, product])

    useEffect(() => {
        axios.get('http://localhost:8080/cate').then((response) => {
            setCategory(response.data)
            console.log(category)
        })
    }, [category])

    const handleFormUpdate = (values) => {
        axios.put('http://localhost:8080/product/' + id, values)
            .then(() => {
            navigate('/')
        })
    }

    return (
        <>
            <Formik initialValues={product}
                    onSubmit={handleFormUpdate}
                    enableReinitialize={true}>
                
                <Form>
                    <table>
                        <tbody>
                        <tr>
                            <td>ID</td>
                            <td><Field name={"id"}/></td>
                        </tr>
                        <tr>
                            <td>Name</td>
                            <td><Field name={"name"}/></td>
                        </tr>
                        <tr>
                            <td>Price</td>
                            <td><Field name={"price"}/></td>
                        </tr>
                        <tr>
                            <td>Number</td>
                            <td><Field name={"number"}/></td>
                        </tr>
                        <tr>
                            <td>Category</td>
                            <td>
                                <Field as={'select'} name={"category.id"}>
                                    <option>Select Category</option>
                                    {category.map((item) => (
                                        <option value={item.id}>{item.name}</option>
                                    ))}
                                </Field>
                            </td>
                        </tr>
                        <tr>
                            <button>Save</button>
                            <Link to={'/'}>Back to List</Link>
                        </tr>
                        </tbody>
                    </table>
                </Form>
            </Formik>
        </>
    )


}