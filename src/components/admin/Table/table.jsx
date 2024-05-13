import React from 'react'
import Tableitem from '../tableitem/tableitem'
import './table.css'

const Table = ({items}) => {
  return (
    <table class="table table-hover table-dark mb-5 mt-5">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">image</th>
            <th scope="col">name</th>
            <th scope="col">description</th>
            <th scope="col">price</th>
            <th scope="col">delete</th>
          </tr>
        </thead>
        <tbody>
            {

                items.map((item,index)=>{
                    return (
                        <Tableitem key={index} item={item}/>
                    )
                })


            }
          </tbody>
      </table>
    
    
  )
}

export default Table