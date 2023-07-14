import {useLocation, useNavigate} from "react-router-dom";
import "./List.css";
import Swal from "sweetalert2";
import axios from "axios";
import React, {useEffect} from "react";

export default function DetailTour() {
    const {state} = useLocation();
    const navigate = useNavigate()
    console.log(state.detail)
    const handleDeleteProduct = (id) => {
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
                axios
                    .delete("http://localhost:3000/tuors/" + id)
                    .then((response) => {
                        console.log(response);
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "Your file has been deleted.",
                            showConfirmButton: false,
                            timer: 1500,
                        });
                        if (response.status === 200) {
                            // Redirect back to the list page
                            navigate("/");
                        }
                    })
                    .catch((error) => {
                        console.log(error);
                        Swal.fire({
                            position: "center",
                            icon: "error",
                            title: "An error occurred while deleting the product.",
                            showConfirmButton: false,
                            timer: 1500,
                        });
                    });
            }
        });
    };

    useEffect = () => {
        axios.get("http://localhost:3000/tuors/" + state.id).then(() => {
            navigate("/tours");
        });
    };
    return (
        <>
            <h1>{state.detail.id}</h1>
            <h1>{state.detail.title}</h1>
            <h1>{state.detail.price}</h1>
            <h1>{state.detail.description}</h1>
        </>


    );
}
