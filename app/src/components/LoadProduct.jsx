import React, { useEffect, useState } from "react";
import "./LoadProduct.css";

const LoadProduct = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);
  const [disbled,setDisabled] = useState(false )

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=12&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const result = await response.json();
      setProducts((prev)=> [...prev, ...result.products]);
      // console.log(result.products)
    };

    fetchProduct();
  }, [count]);

  useEffect(()=>{
    if(products.length === 96){
      setDisabled(true)
    }
  },[products])

  // Handle initial loading state
  if (products.length === 0 && loading) {
    return <div className="loading">Loading...</div>;
  }

  // Render products once fetched
  return (
    <div className="container">
      <div className="row">
        {products.map((product, index) => (
          <div className="col-lg-3 col-md-4 mb-4" key={index}>
            <div className="card">
              <img src={product.thumbnail} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <a href="#" className="btn btn-primary">
                  Add to cart
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-4 mb-5">
      <button onClick={()=> setCount(count+1)} className="btn btn-primary" disabled={disbled}>More Product</button>

      </div>
    </div>
  );
};

export default LoadProduct;
