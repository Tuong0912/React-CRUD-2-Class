import {Link, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {Field, Form, Formik} from "formik";
import "./List.css"; // Import CSS file for styling

export default function UpdateProduct() {
    const {id} = useParams();
    const navigate = useNavigate();
    const [tours, setTours] = useState({});

    useEffect(() => {
        axios.get('http://localhost:3000/tuors/' + id).then((response) => {
            setTours(response.data);
            console.log(tours)
        });
    }, [id]);

    const handleFormUpdate = (values) => {
        axios.put('http://localhost:3000/tuors/' + id, values).then(() => {
            navigate("/");
        });
    };

    return (
        <div className="product-list-container">
            <Formik
                initialValues={tours}
                onSubmit={handleFormUpdate}
                enableReinitialize={true}
            >
                <Form className="product-form">
                    <table className="product-table">
                        <tbody>
                        <tr className="product-table-row">
                            <td className="product-table-cell">ID</td>
                            <td className="product-table-cell">
                                <Field name="id" className="form-control" disabled/>
                            </td>
                        </tr>
                        <tr className="product-table-row">
                            <td className="product-table-cell">Title</td>
                            <td className="product-table-cell">
                                <Field name="title" className="form-control"/>
                            </td>
                        </tr>
                        <tr className="product-table-row">
                            <td className="product-table-cell">Price</td>
                            <td className="product-table-cell">
                                <Field name="price" className="form-control"/>
                            </td>
                        </tr>
                        <tr className="product-table-row">
                            <td className="product-table-cell">Description</td>
                            <td className="product-table-cell">
                                <Field name="description" className="form-control"/>
                            </td>
                        </tr>
                        <tr className="product-table-row">
                            <td className="product-table-cell" colSpan={2}>
                                <button type="submit" className="btn-update">
                                    Save
                                </button>
                                <Link to="/tours" className="btn-back">
                                    <button className="btn-update">Back to List</button>
                                </Link>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </Form>
            </Formik>
        </div>
    );
}
