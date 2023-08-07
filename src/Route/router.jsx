import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Details from "../pages/Home/Details/Details";
import ContactPage from "../pages/ContactPage/ContactPage";

  const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/about',
            element:<Details></Details>
        },
        {
            path:'/contact',
            element:<ContactPage></ContactPage>
        },
      ]
    },
  ]);

  export default router;