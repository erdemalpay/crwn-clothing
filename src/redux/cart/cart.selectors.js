import { createSelector } from 'reselect';

export const selectCart = state => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
);

export const selectCartItemCount = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((count, item) => count + item.quantity, 0)
  );
  
  export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((count, item) => count + (item.quantity * item.price), 0)
)