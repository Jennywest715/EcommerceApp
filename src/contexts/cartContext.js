import React, { createContext } from "react";
import { useState } from "react";

// The state and controls for the cart used throught the App.
const cartContext = createContext({
    // What is in the cart, to be a nested map {item_id: {itemDetails, quantity}}
    cart: {},
    // Function add an item to the cart
    addItem: () => {},
    // Function to remove item from the cart
    removeItem: () => {},
    // Function to clear all items from the cart
    clearItems: () => {},
});

// The item that controls the cart context for the App. 
// This will handle storing and maintaining the cart.
// The provider will wrap all components in the App (through index.js) 
const CartProvider = ({children}) => {
  // cart will be a nested map {item_id: {itemDetails, quantity}}
  const [cart, setCart] = useState({});

  const addItem = (productID, product, count) => {
  // Adds an item to the cart, 
  // Args:
  // itemID:  The product ID.
  // product: All the item details(given by the URL)
  // count: The number of the item wanted.

    if (cart.hasOwnProperty(productID)) {
      // if the product is already in the cart, just increase the quantity.
      cart[productID].count+=count
      setCart({...cart})
    } else {
      // otherwise add the item to the cart.
      let newProduct = {}
      newProduct[productID] = {details: product, count: count};
      // `...` is the spreat notation, it combines all items currently in the cart with the new item.
      setCart({...cart, ...newProduct})
    }
  }

  const removeItem = (productID) => {
    // Removes an item from the cart.
    // Args:
    // productID: The product ID of the item to remove.

    delete cart[productID]
    setCart({...cart})
  }

  const clearItems = () => {
    // Just sets the cart to an empty object.
    setCart({})
  }
  


  return (
    // The actuall component code that wraps all children components with a component to provide the context. 
    // Value: This is the values for `cartContext` object created at the top of this file.
    <cartContext.Provider value={{cart: cart, addItem: addItem, removeItem: removeItem, clearItems: clearItems }}>
      {children}
    </cartContext.Provider>
  );
};

// A function to give a component access to the `cartContext` passed down from the `cartProvider` defined above.
const withCart = (Child) => (props) => (
    <cartContext.Consumer>
      {(context) => <Child {...props} {...context} />}
    </cartContext.Consumer>
);

export { CartProvider, withCart };