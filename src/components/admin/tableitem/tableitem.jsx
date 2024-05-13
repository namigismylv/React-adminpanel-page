import React, { useContext } from "react";
import axios from "axios";
import MainContext from "../../../context/context";
const Tableitem = ({ item }) => {
  const { data, setData} = useContext(MainContext);
  function deleteItem(id) {
    axios.delete(`http://localhost:3000/products/${id}`).then((res) => {
      setData([...data.filter((x) => x.id != res.data.id)]);
    });
  }
  return (
    <>
      <tr>
        <th scope="row">{item.id}</th>
        <td>
          <img width="100px" height="100px" src={item.image} alt="" />
        </td>
        <td>{item.name}</td>
        <td>{item.description}</td>
        <td>{item.price}$</td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => deleteItem(item.id)}
          >
            delete
          </button>
        </td>
      </tr>
    </>
  );
};

export default Tableitem;
