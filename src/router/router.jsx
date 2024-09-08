import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../Layout/Layout";
import User from "../pages/User/User";
import NewWord from "../pages/NewWord/NewWord";
import Card from "../pages/Card/Card";
import Register from "../pages/User/Register";
import Login from "../pages/User/Login";

import NotFound from "../pages/NotFound";
import ProtectedRoute from "../components/ProtectedRoute";
import RevisedWord from "../pages/RevisedWord/RevisedWord";
import Quiz from "../pages/RevisedWord/Quiz";
import Score from "../pages/RevisedWord/Score";
import Home from "../pages/Home";

import Flashcard from "../pages/NewWord/FlashCard"



const Router = () => {
    const config = createBrowserRouter([
        {
            path: '/',
            element: <Home />
        },
        {
            path: "/vocab",
            element: <Layout />,
            children: [          
            // {

            //     path:"/vocab/note",
            //     element: <ProtectedRoute><Note/></ProtectedRoute>,
            // },
            {
                path:"/vocab/revise",
                // element: <ProtectedRoute><RevisedWord/></ProtectedRoute>,
                element: <RevisedWord/>
            },
              
            {

                path:"/vocab/new-word",
                element:<NewWord/>

            },

            {

                path: "/vocab/revise/quiz",
                // element: <ProtectedRoute><Quiz/></ProtectedRoute>
                element: <Quiz/>
               },

               {
                path: "/vocab/revise/quiz/score",
                // element: <ProtectedRoute><Score /></ProtectedRoute>
                element: <Score />
               },
            {

                path:"/vocab/card",
                element: <Card/>
            },
            {
                path:"/vocab/new-word/flashcard",
                element: <Flashcard/>
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
