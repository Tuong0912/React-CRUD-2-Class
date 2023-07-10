import {Link} from "react-router-dom";

export default function Login() {
    return (<>
        <input type={"text"} value={"Account"}/>
        <input type={"text"} value={"Password"}/>

        <Link to={"/register"}><h4>Register</h4></Link>
    </>)
}