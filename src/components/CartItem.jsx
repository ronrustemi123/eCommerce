import './CartItem.css'

const CartItem = ({price, img, title, quantity}) => {
    return (
        <div className="cart-item">
            <img src={img} alt="" />
            <h2>{title}</h2>
            <p>{price}</p>
            <p>{quantity}</p>
        </div>
    );
}
 
export default CartItem;