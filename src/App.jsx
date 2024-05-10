import { useEffect, useState } from "react";
import { RouterProvider, Routes, createBrowserRouter } from "react-router-dom";
import ROUTES from "./routes/routes";
import MainContext from "./context/context.jsx";
import axios from "axios";
import "./App.css";
function App() {
  const router = createBrowserRouter(ROUTES);
  const [data, setData] = useState([]);
  const contextData = { data, setData };
  useEffect(()=>{
    axios.get("http://localhost:3000/products").then(res=>{
    console.log(res);  
    // setData([...res.data])
    },[])
  })
  return (
    <>
      <MainContext.Provider value={contextData}>
        <RouterProvider router={router} />
      </MainContext.Provider>
    </>
  );
}
export default App;
