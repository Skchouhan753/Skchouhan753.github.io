import { Route, Routes } from "react-router-dom"
import { Navbar } from "../components/Navbar/Navbar"
import { Statisticss } from "../components/Statistics/Statisticss"




export const AllRoutes=()=>{
    <Routes>
        <Route path='/' element={<Navbar/>}/>
        
    </Routes>
}