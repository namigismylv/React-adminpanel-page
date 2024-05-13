import React, { useContext,useEffect} from "react";
import MainContext from "../../../context/context";

const BasketItem = ({ item,index }) => {
  const { basketItems, setBasketItems } = useContext(MainContext);
  useEffect(() => {
    localStorage.setItem("basketItems", JSON.stringify(basketItems));
  }, [basketItems]);
  const addToBasket = (item) => {
    const targetIndex = basketItems.findIndex(
      (x) => x.item.id === item.item.id
    );

    if (targetIndex !== -1) {
      const updatedBasketItems = [...basketItems];
      updatedBasketItems[targetIndex].count += 1;
      updatedBasketItems[targetIndex].totalPrice += item.item.price;
      setBasketItems(updatedBasketItems);
    } else {
      const newBasketItem = {
        item: item.item,
        count: 1,
        totalPrice: item.item.price,
      };
      setBasketItems([...basketItems, newBasketItem]);
    }
  };
  const removeFromBasket=(basketItem)=>{
    const target=basketItems.find((item)=>item.item.id==basketItem.item.id)
    if(target.count>1){
        target.count-=1
        target.totalPrice-=target.item.price
        setBasketItems([...basketItems])
        localStorage.setItem("basketItems",JSON.stringify(basketItems))

    }
    else{
        setBasketItems([...basketItems.filter(item=>item.item.id !=target.item.id)])
        localStorage.setItem("basketItems", JSON.stringify(basketItems.filter((item) => item.item.id !== target.item.id)));
    }

  }

  return (
    <>
      <tr>
        <th scope="row">{index+1}</th>
        <td>
          <img width="100px" height="100px" src={item.item.image} alt="" />
        </td>
        <td>{item.item.name}</td>
        <td>{item.item.price}$</td>
        <td>{item.count}</td>
        <td>{item.totalPrice}$</td>
        <td>
          <button onClick={() => addToBasket(item)} className="btn btn-primary">
            Add
          </button>
        </td>
        <td>
          <button className="btn btn-danger" onClick={()=>removeFromBasket(item)}>Delete</button>
        </td>
      </tr>
    </>
  );
};

export default BasketItem;
