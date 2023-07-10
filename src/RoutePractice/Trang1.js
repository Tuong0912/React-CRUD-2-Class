import {Link} from "react-router-dom";

export default function List() {
    return (
        <>
            <Link to={'/a'}><h1>Trang chu</h1></Link>
            <Link to={"login"}><h1>Login</h1></Link>
        </>
    )
}