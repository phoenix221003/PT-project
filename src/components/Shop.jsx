import ShopItem from "./ShopItem"
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Shop () {
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
            <ShopItem/>
            <ShopItem/>
            <ShopItem/>
            <ShopItem/>

        </div>
    )
}
export default Shop