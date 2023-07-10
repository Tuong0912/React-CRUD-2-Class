import {useParams, useNavigate} from "react-router-dom";
import {Field, Form, Formik} from "formik";
import axios from "axios";
import {useEffect, useState} from "react";

export default function EditProduct() {
    const {id} = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState({
        name: "",
        price: '',
        number: ''
    });

    useEffect(() => {
        axios.patch(`http://localhost:8080/product/${id}`).then((response) => {
            setProduct(response.data);
            console.log(product)
        });
    }, []);

    return (
        <>
            <h1>Edit Product</h1>
            <Formik initialValues={product}
                    onSubmit={(values) => {
                        axios.put(`http://localhost:8080/product/` + id, values)
                            .then(() => {
                                navigate("/");
                            })
                    }}
                    enableReinitialize={true}>
                <Form>
                    <table>
                        <tbody>
                        <tr>
                            <td>Name</td>
                            <td>
                                <Field type="text" name="name"/>
                            </td>
                        </tr>
                        <tr>
                            <td>Price</td>
                            <td>
                                <Field type="text" name="price"/>
                            </td>
                        </tr>
                        <tr>
                            <td>Number</td>
                            <td>
                                <Field type="text" name="number"/>
                            </td>
                        </tr>
                        <tr>
                            <td>Category</td>
                            <td>
                                <Field type="text" name="number"/>
                            </td>
                        </tr>

                        </tbody>
                        <tbody>
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
    );
}
