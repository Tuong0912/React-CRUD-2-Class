import {Route, Routes} from 'react-router-dom';

import List from "./CRUD-2/List";
import Create from "./CRUD-2/Create";
import UpdateProduct from "./CRUD-2/UpdateProduct";
import DetailTour from "./CRUD-2/Detail";

function App() {
    return (

        <Routes>

            <Route path="/tours" element={<List/>}/>
            <Route path="/createTours" element={<Create/>}/>
            <Route path={"/updateTour/:id"} element={<UpdateProduct/>}></Route>
            <Route path="/detail/:id" element={<DetailTour/>}/>
        </Routes>

    );
}

export default App;
