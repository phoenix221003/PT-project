import { useState } from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";
function ShopItem(props) {
  const [quantity, setQuantity] = useState(0);


  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };
  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  function handleCart(e) {
    e.preventDefault()
    const setValues = {
        Name: props.Name,
        Description: props.Description,
        Photo: props.Photo,
        MRP: props.mrp,
        Quantity: quantity,
       

    }
    axios.post("http://localhost:3000/cart/add", setValues)
    .then((res) => console.log(res))
    .catch((error) => {
        console.log('Error:', error);
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

        <Button onClick={(e) => handleCart(e)} variant="outline-dark">Add-to-Cart</Button>
      </div>
    </div>
  );
}
export default ShopItem;
