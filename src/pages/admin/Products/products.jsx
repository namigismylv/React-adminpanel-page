import React, { useContext } from "react";
import Table from "../../../components/Table/table";
import MainContext from "../../../context/context";
import Loading from "../../Loading/Loading";
const Products = () => {
  const { data,loading } = useContext(MainContext);
  return (
    <div>
          
          {
            loading ? <Loading/> : <Table items={data}/>
          
          }
      
    </div>
  );
};

export default Products;
