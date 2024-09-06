import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../Layout/Layout";
import User from "../pages/User/User";
import NewWord from "../pages/NewWord/NewWord";
import Card from "../pages/Card/Card";
import Register from "../pages/User/Register";
import Login from "../pages/User/Login";
import Flashcard from "../pages/NewWord/FlashCard"


const Router = () => {
    const config = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [          
            {
                path:"/new-word",
                element:<NewWord/>,
            },
            {
                path:"/card",
                element:<Card/>
            },
            {
                path:"/new-word/flashcard",
                element:<Flashcard/>
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
