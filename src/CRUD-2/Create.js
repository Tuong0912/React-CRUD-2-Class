import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {Field, Form, Formik} from "formik";

export default function Create() {
    const navigate = useNavigate()
    const [category, setCategory] = useState([])
    const [product, setProduct] = useState({
        id: '',
        name: '',
        price: '',
        number: '',
        category: {
            id: ''
        }
    });

    useEffect(() => {
        axios.get("http://localhost:8080/cate").then((response) => {
            setCategory(response.data)
        })
    }, [])

    const handleForSubmit = (values) => {
        const saveProduct = {
            ...values, category: {
                id: values.category
            }
        };
        axios.post('http://localhost:8080/product', saveProduct).then(() => {
            console.log(values)
            navigate('/')
        })
    }
    return (
        <>
            <Formik
                initialValues={product}
                onSubmit={handleForSubmit}
            >
                <Form>
                    <table>
                        <tbody>
                        <tr>
                            <td>Name</td>
                            <td><Field type={"text"} name={'name'}/></td>
                        </tr>
                        <tr>
                            <td>Price</td>
                            <td><Field type={"text"} name={'price'}/></td>
                        </tr>
                        <tr>
                            <td>Number</td>
                            <td><Field type={"text"} name={'number'}/></td>
                        </tr>
                        <tr>
                            <td>Category</td>
                            <td>
                                <Field as="select" name={'category'}>
                                    <option>Choose your Category</option>
                                    {category.map((item) => {
                                        return (
                                            <option value={item.id}>{item.name}</option>
                                        )
                                    })}
                                </Field>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button>Save</button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </Form>
            </Formik>

        </>
    )
}