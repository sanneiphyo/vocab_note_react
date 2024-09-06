import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../Layout/Layout";
import User from "../pages/User/User";
import Note from "../pages/Note/Note";
import Card from "../pages/Card/Card";
import Register from "../pages/User/Register";
import Login from "../pages/User/Login";
import NotFound from "../pages/NotFound";
import ProtectedRoute from "../components/ProtectedRoute";
import RevisedWord from "../pages/RevisedWord/RevisedWord";
import Quiz from "../pages/RevisedWord/Quiz";
import Score from "../pages/RevisedWord/Score";

const Router = () => {
    const config = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [          
            {
                path:"/note",
                element: <ProtectedRoute><Note/></ProtectedRoute>,
            },
            {
                path:"/revise",
                element: <ProtectedRoute><RevisedWord/></ProtectedRoute>,
                
            },

            {
                path: "/revise/quiz",
                element: <Quiz/>
               },

               {
                path: "/revise/quiz/score",
                element: <Score/>
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

        },
        {
            path:"*",
            element : <NotFound />

        }
    ]);

    return <RouterProvider router={config} />;
};

export default Router;
