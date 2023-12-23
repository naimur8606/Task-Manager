import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";
import Dashboard from "../Layouts/Dashboard";
import CreateUser from "../Pages/Create&Login/CreateUser";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:"/",
            element: <Home></Home>
        },
        {
            path:"/registration",
            element: <CreateUser></CreateUser>
        },
        {
            path:"/contact",
            element: <Contact></Contact>
        }
      ]
    },
    {
        path:'/dashboard',
        element:<Dashboard></Dashboard>
    }
  ]);

export default router;