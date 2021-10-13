import React from "react";
import { Link } from 'react-router-dom';
import {FaShoppingCart} from 'react-icons/fa';
import { Container, Dropdown, FormControl, Navbar, Nav, Badge, Button } from "react-bootstrap";
import { CartState } from "../context/Context";
import { AiFillDelete } from "react-icons/ai";
// import Rating from "./Rating";

const Header = () => {

  const {state: {cart}, dispatch, productDispatch } = CartState()

  return (
    <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
      <Container>
        <Navbar.Brand>
          <Link to="/" className='home-link'>Random Shopper<i class="fas fa-tag" id='icon'></i></Link>
        </Navbar.Brand>
        <Navbar.Text className="search">
          <FormControl
            style={{ width: 350 }}
            placeholder="Search for product"
            className="m-auto search-bar"
            onChange={(e) => productDispatch ({
              type: 'FILTER_BY_SEARCH',
              payload: e.target.value,
            })}
          />
        </Navbar.Text>
        <Nav>
            <Dropdown alignRight>
                <Dropdown.Toggle variant = 'success' className='dropcart' >
                    <FaShoppingCart color='white' fontSize='25px' />
                    <Badge>{cart.length}</Badge> 
                </Dropdown.Toggle>

                <Dropdown.Menu style={{ minWidth: 370 }}>
                  
                  { cart.length>0 ? (
                    <>
                      {cart.map((prod) => (
                        <span className='cartitem' key={prod.id}>
                          <img src={prod.image} className='cartItemImg' alt={prod.name}/>
                          <div className='cartItemDetail'>
                            <span>{prod.name}</span>
                            <span>$ {prod.price.split(".")[0]}</span>
                            {/* <Rating rating={prod.ratings}/> */}
                          </div>
                          <AiFillDelete fontSize='20px' style={{cursor: 'pointer'}} onClick={() => dispatch({
                            type: 'REMOVE_FROM_CART',
                            payload: prod,
                          })} />

                        </span>
                      ))}
                      <Link to='/cart'>
                        <Button style={{ width: '95%', margin: '0 10px'}}>
                          Go to Cart
                        </Button>
                      </Link>
                    </>

                  ) : (
                    <span style={{ padding: 10 }}>Cart is Empty!</span>
                  )}
                </Dropdown.Menu>
            </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
