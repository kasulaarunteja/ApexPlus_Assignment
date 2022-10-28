
import React from "react";
import { Routes,Route } from "react-router-dom";
import Navbar from "../Components/Navbar";

const AllRoutes = () => {
    return(
        <Routes>
           <Route path="/" element={<Navbar/>}/>
        </Routes>
    )
}

export default AllRoutes;