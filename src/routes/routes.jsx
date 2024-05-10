import Home from "../pages/site/home/home";
import Shop from "../pages/site/shop/shop";
import Dashboard from "../pages/admin/Dashboard/dashboard";
import Products from "../pages/admin/Products/products";
import AdminRoot from "../pages/admin/AdminRoot";
import SiteRoot from "../pages/site/SiteRoot";
import Error from "../pages/Error/Error";
import Detail from "../pages/site/Detail/Detail";  
import Add from "../pages/admin/Add/Add";


const ROUTES = [
  {
    path: "/",
    element:<SiteRoot/>,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "shop",
        element:<Shop/>
      },
      {
        path:"details/:id",
        element:<Detail/>
      },
      {
        path:"*",
        element:<Error/>
      }
    ],
  },
  {
    path:"/admin",
    element:<AdminRoot/>,
    children:[
        {
            path:"",
            element:<Dashboard/>
        },
        {
            path:"products",
            element:<Products/>
        },
        {
          path:"add",
          element:<Add/>
      }
    ]
  }
];
export default ROUTES;
