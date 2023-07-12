import {Route, Routes} from 'react-router-dom';

import List from "./CRUD-2/List";
import Create from "./CRUD-2/Create";
import DetailProduct from "./CRUD-2/Detail";
import UpdateProduct from "./CRUD-2/UpdateProduct";
import FindByCloseName from "./CRUD-2/FindByCloseName";

function App() {
    return (

        <Routes>

            <Route path="/" element={<List/>}/>
            <Route path="/createProduct" element={<Create/>}/>
            <Route path={"/updateProduct/:id"} element={<UpdateProduct/>}></Route>
            <Route path={"/detail/:id"} element={<DetailProduct/>}/>
            <Route path={"/find"} element={<FindByCloseName/>}></Route>
        </Routes>

    );
}

export default App;
