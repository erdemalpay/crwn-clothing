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