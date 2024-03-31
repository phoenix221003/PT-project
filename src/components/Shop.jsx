import ShopItem from "./ShopItem";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState, useEffect } from "react";
import axios from "axios";

function Shop() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/shop")
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
          <h2>SHOP NOW</h2>
          <h6>CHECK OUT OUR PRODUCT</h6>
        </div>
        <div className="shop-search">
          <Form inline>
            <Row>
              <Col xs="auto">
                <Form.Control
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2 search-bar"
                />
              </Col>
            </Row>
          </Form>
          <hr />
        </div>
      </div>
      {products.map((product) => {
        return (
            <ShopItem
            Name={product.Name}
            Description={product.Description}
            Photo={product.Photo}
            mrp={product.MRP}
            />
        )
      })}
    </div>
  );
}
export default Shop;
