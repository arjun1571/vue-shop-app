import {createBrowserRouter} from "react-router-dom";
import Main from "../LayOut/Main";
import Shop from "../page/Shop/Shop";
import Home from "../page/Home/Home";
import Blog from "../page/Blog/Blog";
import About from "../page/About/About";
import Contact from "../page/Contact/Contact";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:"/",
            element: <Home></Home>
        },
        {
            path:"/home",
            element: <Home></Home>
        },
        {
            path:"/shop",
            element: <Shop></Shop>
        },
        {
            path:"/blog",
            element: <Blog></Blog>
        },
        {
            path:"/about",
            element: <About></About>
        },
        {
            path:"/contact",
            element: <Contact></Contact>
        },

      ]
    },
  ]);