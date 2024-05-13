import React, { useContext, useEffect } from "react";
import "./card.css";
import MainContext from "../../../context/context";

const Card = ({ info }) => {
  const { basketItems, setBasketItems } = useContext(MainContext);

  useEffect(() => {
    localStorage.setItem("basketItems", JSON.stringify(basketItems));
  }, [basketItems]);

  function addToBasket(info) {
    const target = basketItems.find((item) => item.item.id === info.id);
    if (target) {
      target.count += 1;
      target.totalPrice += info.price;
      setBasketItems([...basketItems]);
    } else {
      const newBasketItem = {
        item: info,
        count: 1,
        totalPrice: info.price,
      };
      setBasketItems([...basketItems, newBasketItem]);
    }
  }

  return (
    <div className="col-3">
      <div className="card mb-5" style={{ width: "16rem" }}>
        <img src={info.image} height="300px" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{info.name}</h5>
          <p className="card-text">{info.description}</p>
          <p className="card-text">Price: {info.price}$</p>
          <button
            className="btn btn-outline-dark"
            onClick={() => addToBasket(info)}
          >
            Add To Basket
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
