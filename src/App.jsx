import { useEffect, useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ROUTES from "./routes/routes";
import MainContext from "./context/context.jsx";
import axios from "axios";
import "./App.css";
function App() {
  const router = createBrowserRouter(ROUTES);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [basketItems,setBasketItems]=useState(localStorage.getItem("basketItems")? JSON.parse(localStorage.getItem("basketItems")):[])
  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((res) => {
        setData([...res.data]);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);
  
  const contextData = {
    data,
    setData,
    error,
    setError,
    loading,
    setLoading,
    basketItems,
    setBasketItems
  };
  return (
    <>
      <MainContext.Provider value={contextData}>
        <RouterProvider router={router} />
      </MainContext.Provider>
    </>
  );
}
export default App;
