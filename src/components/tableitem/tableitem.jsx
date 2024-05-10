import React from "react";

const Tableitem = ({item}) => {
  return (
    <>
      <tr>
        <th scope="row">{item.id}</th>
        <td><img width="100px" height="100px" src={item.thumbnail} alt="" /></td>
        <td>{item.title}</td>
        <td>{item.description}</td>
        <td>{item.price}$</td>
        <td>
          <button className="btn btn-danger">delete</button>
        </td>
      </tr>
    </>
  );
};

export default Tableitem;
