import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
function CartItem(props) {
  const [itemsInCart, setItemsInCart] = useState([]);
  const [quantity, setQuantity] = useState(0);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };
  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/cart")
      .then((res) => {
        setItemsInCart(res.data);
        console.log(itemsInCart);
      })
      .catch((err) => console.log(err));
  }, []);
  function handleOrder(id) {
    console.log(id);
    alert("Order placed");
    window.location = "/shop";
    axios
      .delete(`http://localhost:3000/cart/${id}`)
      .then((res) => {
          console.log(res.data);
          if (res.status === 200) {
              // Assuming res.data contains the updated cart items
              setItemsInCart(res.data);
              
          } else {
              // Handle error response
              console.error("Unexpected response:", res.status, res.statusText);
          }
      })
      .catch(error => {
          console.error("Error deleting item:", error);
          // Handle error
      });
}


  return (
    <div className="shop-item-card">
      <div className="item-image">
        <img src={props.Photo} alt="picture1" />
      </div>
      <div className="item-description">
        <div className="item-name">
          <p>{props.Name}</p>
        </div>
        <div className="item-content">
          <p>{props.Description}</p>
        </div>
        <div className="item-mrp">
          <p>{props.mrp}</p>
        </div>

        <div className="item-quantity">
          <p className="quantity-heading">Quantity</p>
          <button onClick={incrementQuantity}>+</button>
          <div className="count-quantity">
            <p className="count-quantity">{quantity}</p>
          </div>
          <button onClick={decrementQuantity}>-</button>
        </div>
        <hr />

        <Button onClick={() => handleOrder(props.Key)} variant="outline-dark">
          Buy Now
        </Button>
      </div>
    </div>
  );
}
export default CartItem;
