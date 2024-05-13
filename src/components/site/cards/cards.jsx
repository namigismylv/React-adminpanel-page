import React from "react";
import Card from "../card/card";

const Cards = ({infos}) => {
  return (
    <>
      <div className="container">
        <div className="row">
         {
            infos.map((info,index)=>{
                return (
                    <Card key={index} info={info}/>
                    
                )
            })
         }
        </div>
      </div>
      ;
    </>
  );
};

export default Cards;
