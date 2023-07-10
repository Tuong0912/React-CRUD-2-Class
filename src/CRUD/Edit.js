import {useParams, useNavigate, Link} from "react-router-dom";
import {Field, Form, Formik} from "formik";
import axios from "axios";
import {useEffect, useState} from "react";

export default function EditProduct() {
    const {id} = useParams();
    const navigate = useNavigate();
    const [cate, setCate] = useState([])
    // const [category,setCategory] = useState(null);
    console.log('cate>>>>>>>', cate)

    const [product, setProduct] = useState({
        name: "",
        price: '',
        number: '',
        category:{
            id:''
        }
    });

    useEffect(() => {
        axios.patch(`http://localhost:8080/product/` + id).then((response) => {
            setProduct(response.data);
            console.log(product)
        });
    }, []);


    useEffect(() => {
        axios.get('http://localhost:8080/cate').then((response) => {
            setCate(response.data)
        })
    }, [])

    const handleFormSubmit =
        (values) => {
            console.log('>>>>>>>>>>>>',values)
            // setProduct({...product,category})
            axios.put(`http://localhost:8080/product/` + id, values)
                .then(() => {
                    navigate("/");
                })
        }


    return (
        <>
            <h1>Edit Product</h1>
            <Formik initialValues={product}
                    onSubmit={handleFormSubmit}
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
                                <Field as="select" name="category.id" >
                                    <option> Select Category</option>
                                    {cate.map((item) => (
                                        <option key={item.id} value={item.id}>{item.name}</option>
                                    ))}
                                </Field>
                            </td>
                        </tr>

                        </tbody>
                        <tbody>
                        <tr>
                            <td>
                                <button>Save</button>
                                <Link to={"/"}>
                                    <button>Back Home</button>
                                </Link>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </Form>
            </Formik>
        </>
    );
}
