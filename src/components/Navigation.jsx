import './Navigation.css'
import { useState, useContext, useEffect } from 'react';

import logo from '../img/newlogo2.png'
import { Stack, SwipeableDrawer } from '@mui/material';
import { Link } from 'react-router-dom';

import { CategoryContext } from '../Context/CategoryContext';
import { CartContext } from '../Context/CartContext';
import CartItem from './CartItem';
import cartImg from '../img/cart/empty-cart.png'


const Navigation = () => {

    const {setCategory} = useContext(CategoryContext)
    const {cartItems, setTotalPrice, totalPrice} = useContext(CartContext)

    const [open, setOpen] = useState(false)
    const [cartOpen, setCartOpen] = useState(false)

    const [isEmpty, setIsEmpty] = useState('none')

    const toggleCartOpen = () => {
        cartOpen === false ? setCartOpen(true) : setCartOpen(false)
    }

    const toggleOpen = () => {
        open === false ? setOpen(true) : setOpen(false)
    }

    useEffect(() => {
        const finalPrice = cartItems.reduce((acc, item) => acc + item.price, 0)
        setTotalPrice(finalPrice)

        cartItems.length === 0 ? setIsEmpty('none') : setIsEmpty('flex')
    }, [cartItems])

    const randomProduct = Math.floor(Math.random() * 20) + 1;

    return (
        <>
            <nav className='nav-bar'>
                <div className="nav-contents">
                    <Link to={'/'}>
                        <img width={86} src={logo} alt="logo" />
                    </Link>
                    <div className="nav-menu">
                        <Link onClick={() => {window.scrollTo(0, 0), setCategory('all')}} to={'/categories'} style={{textDecoration: 'none', color: 'black'}}>
                            <p className='hide-mobile'>categories</p>
                        </Link>
                        <Link onClick={() => window.scrollTo(0, 0)} to={`/product/${randomProduct}`} style={{textDecoration: 'none', color: 'black'}}>
                            <p className='hide-mobile'>product page</p>
                        </Link>
                        <i onClick={toggleCartOpen} className="fa-solid fa-cart-shopping"></i>   
                        <i onClick={toggleOpen} className="fa-solid fa-bars burger"></i>
                    </div>
                </div>
            </nav>
            <SwipeableDrawer onOpen={toggleOpen} onClose={toggleOpen} open={open} anchor='right'>
                <Stack position='relative' sx={{width: "100vw", alignItems: 'center', justifyContent: 'center', height: '100%'}} spacing={4} >
                    <i onClick={toggleOpen} className="fa-solid fa-xmark close"></i>
                    <p className='drawer-text'>categories</p>
                    <p className='drawer-text'>product page</p>
                </Stack>
            </SwipeableDrawer>
            <SwipeableDrawer anchor='right' onClose={toggleCartOpen} onOpen={toggleCartOpen} open={cartOpen}>
                <h1 className='cart-heading'>Your Shopping Cart ({cartItems.length}) <i onClick={toggleCartOpen} className="fa-solid fa-xmark"></i></h1>
                <Stack px={3} sx={{height: '70%', overflow: 'auto'}} direction={'column'} position={'relative'} width={{lg: '35vw', sm: '50vw', xs: '100vw'}} spacing={2.5}>
                    {cartItems.length !== 0 ? cartItems.map((el) => <CartItem key={el.title} title={el.title} img={el.img} quantity={el.quantity} price={el.price} />)
                    : <div className='cart-img-div'><img width={220} height={220} className='cart-img' src={cartImg} alt='cartImage'/> <p>Your cart is empty</p></div>}
                </Stack>
                <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} sx={{height: '70px', borderTop: '3px dashed black', display: isEmpty}} mt={3} mx={3} >
                    <h1 className='total-price'>Total Price: ${totalPrice}</h1>
                    <button className='checkout-btn'>Checkout</button>
                </Stack>
                
            </SwipeableDrawer>
        </>

    );
}
 
export default Navigation;