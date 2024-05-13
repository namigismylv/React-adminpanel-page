import React, { useContext } from "react";
import Table from "../../../components/admin/Table/table";
import MainContext from "../../../context/context";
import Loading from "../../Loading/Loading";
import './products.css'
const Products = () => {
  const { data,loading } = useContext(MainContext);
  return (
    <div id="products">
          
          {
            loading ? <Loading/> : <Table items={data}/>
          
          }
      
    </div>
  );
};

export default Products;
