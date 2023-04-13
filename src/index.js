import React from 'react';
// import ReactDOM from 'react-dom';
import {createRoot} from "react-dom/client"
import './index.css';

import {createBrowserRouter, RouterProvider, Route, Link} from "react-router-dom"

import Login from './Views/Login';
import Cadastro from './Views/Cadastro';
import PagInicial from './Views/PagInicial';
import Home from './Views/Home'
import AddProj from './Views/AddProj'

//Router para as páginas
const router  = createBrowserRouter([
    {
        path:"/",
        element:<PagInicial></PagInicial>
    },
    {
        path:"Login",
        element:<Login></Login>
    },
    {
        path:"Cadastro",
        element:<Cadastro></Cadastro>
    },
    {
        path:"Home",
        element:<Home></Home>
    },
    {
        path:"AddProj",
        element:<AddProj></AddProj>
    }
])

//Render das páginas no index.html
createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
  )

