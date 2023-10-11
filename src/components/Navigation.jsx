import './Navigation.css'
import { useState, useContext } from 'react';

import logo from '../img/newlogo2.png'
import { Stack, SwipeableDrawer } from '@mui/material';
import { Link } from 'react-router-dom';

import { CategoryContext } from '../Context/CategoryContext';
import { CartContext } from '../Context/CartContext';
import CartItem from './CartItem';


const Navigation = () => {

    const {setCategory} = useContext(CategoryContext)
    const {cartItems, setCartItems} = useContext(CartContext)

    const [open, setOpen] = useState(false)
    const [cartOpen, setCartOpen] = useState(false)

    const toggleCartOpen = () => {
        cartOpen === false ? setCartOpen(true) : setCartOpen(false)
    }

    const toggleOpen = () => {
        open === false ? setOpen(true) : setOpen(false)
    }

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
                <Stack px={3} mt={7} sx={{border: '1px solid red', height: '80%', overflow: 'auto'}} direction={'column'} position={'relative'} width={{lg: '35vw', sm: '50vw', xs: '100vw'}} spacing={5}>
                    {cartItems.map(el => <CartItem title={el.title} img={el.img} quantity={el.quantity} price={el.price} />)}
                </Stack>
            </SwipeableDrawer>
        </>

    );
}
 
export default Navigation;