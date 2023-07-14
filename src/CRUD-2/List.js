import React, {useEffect, useState} from "react";
import axios from "axios";
import "./List.css";
import {Link, useNavigate} from "react-router-dom";
import Swal from "sweetalert2";

export default function List() {
    const [tour, setTour] = useState([]);
    const navigate = useNavigate();
    console.log(tour)
    useEffect(() => {
        axios.get("http://localhost:3000/tuors").then((response) => {
            setTour(response.data);
        });
    }, []);

    const handleDetailProduct = (id) => {
        axios.get("http://localhost:3000/tuors/" + id).then((response) => {
            const detail = response.data;
            navigate("/detail/" + id, {
                state: {
                    detail,
                },
            });
        });
    };

    const handleDeleteTours = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete("http://localhost:3000/tuors/" + id).then((response) => {
                    console.log(response);
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Your file has been deleted.",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    if (response.status === 200) {
                        setTour(tour.filter((s) => s.id !== id));
                    }
                });
            }
        });
    };
    return (
        <div className="product-list-container">
            <Link to={"/createTours"}>Create</Link>
            <table className="product-table">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th colSpan={2}>Actions</th>
                </tr>
                </thead>
                <tbody>
                {tour.map((item) => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.price}</td>
                        <td>{item.description}</td>
                        <td colSpan={2} className="action-cell">
                            <button
                                className="btn-delete"
                                onClick={() => handleDeleteTours(item.id)}
                            >
                                Delete
                            </button>
                            <button
                                className="btn-detail"
                                onClick={() => handleDetailProduct(item.id)}
                            >
                                Detail
                            </button>
                            <Link to={'/updateTour/' + item.id}>
                                <button className="btn-update">Update</button>
                            </Link>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}
