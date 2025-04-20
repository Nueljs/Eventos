import {} from "react"
import {createBrowserRouter, RouterProvider } from "react-router-dom"
import { MainLayout } from "./MainLayout";
import {Login} from "./pages/Login/Login.jsx"
import { Register } from "./pages/Register/Register.jsx"

export function App () {

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: 
        [
            {index: true, element: <Login/>},
            {path: "register", element: <Register/>}

        ]
    }

])
    return <RouterProvider router = {router}/>
        
    
}