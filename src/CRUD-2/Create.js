import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import axios from "axios";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import "./List.css";

export default function Create() {
    const navigate = useNavigate();
    const [tours] = useState({
        id: "",
        title: "",
        price: "",
        description: ""
    });


    const handleForSubmit = (values) => {
        axios.post("http://localhost:3000/tuors", values).then(() => {
            console.log(values);
            navigate("/tours");
        });
    };


    return (
        <div className="product-list-container">
            <div className="product-list-header">
                <h1>Create Product</h1>
            </div>
            <Formik
                initialValues={{
                    id: "",
                    title: "",
                    price: "",
                    description: ""
                }}
                onSubmit={handleForSubmit}
            >
                <Form>
                    <table className="product-table">
                        <thead className="product-table-header">
                        <tr>

                            <th>Tille</th>
                            <th>Price</th>
                            <th>Description</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className="product-table-row">
                            <td className="product-table-cell">
                                <Field type="text" name="title"/>
                                <ErrorMessage name="title" component="div"/>
                            </td>
                            <td className="product-table-cell">
                                <Field type="text" name="price"/>
                                <ErrorMessage name="price" component="div"/>
                            </td>
                            <td className="product-table-cell">
                                <Field type="text" name="description"/>
                                <ErrorMessage name="description" component="div"/>
                            </td>
                        </tr>
                        </tbody>
                        <tr className="product-table-row">
                            <td className="product-table-cell">
                                <button type="submit" className="btn-create">
                                    Save
                                </button>

                                <Link to="/tours" className="">
                                    <button className="btn-create">Back to List</button>
                                </Link>
                            </td>
                        </tr>
                    </table>
                </Form>
            </Formik>
        </div>
    );
}
