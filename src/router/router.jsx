import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../Layout/Layout";
import User from "../pages/User/User";
import Note from "../pages/Note/Note";
import Card from "../pages/Card/Card";


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

        }
    ]);

    return <RouterProvider router={config} />;
};

export default Router;
