export default function Navbar(props) {
    return (
        <>
            <input type="text" onChange={(e) => props.search(e.target.value)}/>
        </>
    )
}
