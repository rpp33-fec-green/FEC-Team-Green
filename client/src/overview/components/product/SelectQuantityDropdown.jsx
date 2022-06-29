import React, {useState} from 'react';

//this is the container for my quantity selector
const SelectQuantityDropdown = (props) => {
// create the options for quantities
  var i = 1;
  var options = [];
  // if a size has already been selected, loop through and provide avaliable quantities up to 15
  if (props.inStock && props.sizeAndQuantity.size !== 'SELECT SIZE') {

    while (i < 16 && i <= props.sizes[props.sizeAndQuantity.size].quantity) {
      options.push(<option key={i}>{i}</option>);
      i++;
    }
  }


  return (
    <select className ={`select-quantity ${props.theme}`} disabled={(props.sizeAndQuantity.quantity === '-') ? true : false} onChange={(e) => {
      props.setSizeAndQuantity({...props.sizeAndQuantity, quantity: e.target.value});
    }}>
      {props.sizeAndQuantity.quantity === '-' ? <option>{props.sizeAndQuantity.quantity}</option> : options }
    </select>
  );
};

export default SelectQuantityDropdown;

//allows user to select a quantity from a list.
// from 1 to either quantity or 15, which ever is smaller

/*
Test if I click the button will a dropdown menu appear.
Test if numbers in list stop when reaching 15 when quantitiy is larger.
Test if numbers in list stop before reaching 15 when quantitiy is smaller than 15

*/