import React from 'react';
import './ShoppingCart.css';
import { useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBeer } from '@fortawesome/free-solid-svg-icons';

function ShoppingCart(props) {
  const [itemCount, setItemCount] = useState(0);  

  function handleClick() {
    setItemCount(itemCount + 1);
  }

  return (
      <>
        <FontAwesomeIcon icon={faBeer} size="2x" color="white" />
        <p onClick={handleClick}>{itemCount}</p>
      </>
  );
}

export default ShoppingCart;
