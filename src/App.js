import {Route, Routes} from 'react-router-dom';

import ListProduct from "./CRUD/List";
import CreateProduct from "./CRUD/Create";
import EditProduct from "./CRUD/Edit";
import Detail from "./CRUD/Detail";

function App() {
    return (

        <Routes>
            <Route path="/" element={<ListProduct/>}/>
            <Route path="/create" element={<CreateProduct/>}/>
            <Route path={"/update/:id"} element={<EditProduct/>}></Route>
            <Route path={"/detail/:id"} element={<Detail/>}/>

        </Routes>

    );
}

export default App;
