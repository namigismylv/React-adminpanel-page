import React, { useContext } from 'react'
import MainContext from '../../../context/context'
import BasketItem from '../../../components/site/BasketItem/BasketItem'
import './basket.css'
const Basket = () => {
    const {basketItems}=useContext(MainContext)
    let sum=0
    return (
        <>
        <table class="table table-hover table-dark mb-5 mt-5">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">image</th>
            <th scope="col">name</th>
            <th scope="col">price</th>
            <th scope="col">count</th>
            <th scope="col">totalPrice</th>
            <th scope="col">add</th>
            <th scope="col">delete</th>
          </tr>
        </thead>
        <tbody>
            {
                basketItems.map((item,index)=>{
                    sum+=item.totalPrice
                    return(
                        <BasketItem key={index} item={item} index={index}/>
                        
                    )
                })
            }
          </tbody>
      </table>
      <h1 className='totalprice '>Total Price:{sum}$</h1>
    </>
  )
}

export default Basket
