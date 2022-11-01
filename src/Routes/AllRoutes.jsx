
import React from "react";
import { Routes,Route } from "react-router-dom";
import AddScenario from "../Components/AddScenario";
import Navbar from "../Components/Navbar";

const AllRoutes = () => {
    return(
        <Routes>
           <Route path="/" element={<Navbar/>}/>
           <Route path="/AddScenario" element={<AddScenario/>}/>
        </Routes>
    )
}

export default AllRoutes;