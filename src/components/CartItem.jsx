import { CartContext } from '../Context/CartContext';
import './CartItem.css'
import React, { useState, useContext, useEffect } from 'react';



const CartItem = ({price, img, title, quantity}) => {

    const {cartItems, setCartItems} = useContext(CartContext)

    const [deleteItem, setDeleteItem] = useState(cartItems)

    const removeProduct = () => {
        const filterCart = cartItems.filter(el => el.title !== title)
        setDeleteItem(filterCart)
    }

    useEffect(() => {
        setCartItems(deleteItem)
    }, [deleteItem, setCartItems])

    return (
        <div className="cart-item">
            <img width={120} height={120} src={img} alt="" />
            <div>
                <div className='cart-item-flexier'>
                    <h2>{title}</h2>
                    <p>Amount: {quantity}</p>
                </div>
                <div className='cart-item-flex'>
                    <p>${price}</p>
                    <i onClick={removeProduct} className="fa-solid fa-xmark"></i>
                </div>
            </div>
        </div>
    );
}
 
export default CartItem;