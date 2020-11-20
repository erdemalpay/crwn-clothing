import React from 'react';
import { connect } from 'react-redux';
import CartItem from '../cart-item/cart-item.component';

import CustomButton from '../custom-button/custom-button.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';

import './cart-dropdown.styles.scss';

const Cart = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {
        cartItems.map(cartItem => (
          <CartItem item={cartItem} />
        ))
      }
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  </div>
)

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(Cart);