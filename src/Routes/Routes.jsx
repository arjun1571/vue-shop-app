import {createBrowserRouter} from "react-router-dom";
import Main from "../LayOut/Main";
import Shop from "../page/Shop/Shop";
import Home from "../page/Home/Home";

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

      ]
    },
  ]);