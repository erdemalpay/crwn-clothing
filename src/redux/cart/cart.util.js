export const addItemToCart = (cartItems, item) => {
  const existingCartItem = cartItems.find(cartItem => cartItem.id === item.id);

  if (existingCartItem) {
    return cartItems.map(cartItem => {
      if (cartItem.id === item.id) {
        return {...cartItem, quantity: cartItem.quantity + 1};
      }
      return cartItem;
    });
  }
  return [...cartItems, { ...item, quantity: 1 }];
}

export const removeItemFromCart = (cartItems, item) => {
  const existingCartItem = cartItems.find(cartItem => cartItem.id === item.id);

  if (existingCartItem.quantity === 1) {
    return clearItemFromCart(cartItems, existingCartItem.id);
  }
  return cartItems.map(cartItem => {
    if (cartItem.id === item.id) {
      return {...cartItem, quantity: cartItem.quantity - 1};
    }
    return cartItem;
  });
}

export const clearItemFromCart = (cartItems, itemId) => {
  console.log(itemId);
  console.log(cartItems);
  return cartItems.filter(cartItem => cartItem.id !== itemId)
}