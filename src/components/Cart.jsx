import CartItem from "./CartItem";
import { useState, useEffect } from "react";
import axios from "axios";

function Cart() {


  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/cart")
      .then((res) => {
        setProducts(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="shop">
      <div className="shop-header-search">
        <div className="shop-header">
          <h2>CART</h2>
         
        </div>
      </div>
      {products.map((product) => {
        return (
            <CartItem
            Name={product.Name}
            Description={product.Description}
            Photo={product.Photo}
            mrp={product.MRP}
            Quantity={product.Quantity}
            />
        )
      })}
    </div>
  );
}
export default Cart;
