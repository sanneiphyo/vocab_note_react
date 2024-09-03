import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../Layout/Layout";
import User from "../pages/User/User";
import Note from "../pages/Note/Note";
import Card from "../pages/Card/Card";
import Register from "../pages/User/Register";
import Login from "../pages/User/Login";


const Router = () => {
    const config = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [          
            {
                path:"/note",
                element:<Note/>,
            },
            {
                path:"/card",
                element:<Card/>
            }
            ],
        },
        {
            path:"/user",
            element : <User/>

        },

        {
            path:"/register",
            element : <Register/>

        },
        {
            path:"/login",
            element : <Login/>

        }
    ]);

    return <RouterProvider router={config} />;
};

export default Router;
