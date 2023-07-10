import {useNavigate} from "react-router-dom";
import {Field, Form, Formik} from "formik";
import axios from "axios";
import {useEffect, useState} from "react";

export default function CreateProduct() {
    const navigate = useNavigate()

    const [cate, setCate] = useState([])
    const [product, setProduct] = useState({
        name: "",
        price: '',
        number: '',
        category: {
            id: ''
        }
    });
    useEffect(() => {
        axios.get('http://localhost:8080/cate').then((response) => {
            setCate(response.data)
        })
    }, [])

    const handleFormSubmit = values => {
        const updatedProduct = {
            ...values,
            category: {
                id: values.category
            }
        };
        axios.post('http://localhost:8080/product', updatedProduct).then(() => {
            console.log(values)
            navigate('/')

        })
    }

    return (<>
        <Formik
            initialValues={product}
            onSubmit={handleFormSubmit}
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
                        <td>
                            <Field as="select" name="category">
                                <option value=''>Select Category</option>
                                {cate.map((category) => (<option value={category.id}>
                                    {category.name}
                                </option>))}
                            </Field>
                        </td>
                    </tr>
                    </tbody>
                    <tbody>
                    <tr>
                        <td>
                            <button type={'submit'}>Save</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </Form>
        </Formik>
    </>)
}