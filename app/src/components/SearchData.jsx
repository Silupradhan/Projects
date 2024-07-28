import React, { useEffect, useState } from 'react'
import "./SearchData.css"

const SearchData = () => {

    const [products,setProducts] = useState([])
    const [searchItem,setSearchItem] = useState("")


    useEffect(()=>{
        const fetchData = async() =>{
            const response = await fetch('https://dummyjson.com/products?limit=100')
            const result = await response.json()
    
            console.log(result)
            setProducts(result.products)
    
        }
        fetchData()
    },[])

  return (
    <div>

        <h1>Search Product</h1>
        <input type="text" placeholder="Search Product" onChange={(e)=>  setSearchItem(e.target.value)}/>
        <button>Search</button>



<div className='product-list'>

{
    products.filter((item)=>{
        if(searchItem === ""){
             return item
        }
        else if(item.title.toLowerCase().includes(searchItem.toLowerCase())){
            return item
        }
    })
            .map((item,id)=>{
              return <p key={id} className='product-item'>{item.title}</p>
            })
        }
      
</div>
        
    </div>
  )
}

export default SearchData
