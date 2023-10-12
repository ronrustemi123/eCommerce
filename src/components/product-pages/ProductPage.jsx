import { useParams } from 'react-router-dom';
import './ProductPage.css'
import {items} from '../AllData'
import Trending from '../Trending'
import { Button, ButtonGroup } from '@mui/material';
import { useState, useContext, useEffect } from 'react';

import { CartContext } from '../../Context/CartContext';

const ProductPage = () => {

    const {price, setPrice, quantity, setQuantity, setCartItems, cartItems} = useContext(CartContext)

    const {itemId} = useParams()

    let item = items.filter(el => el.id == itemId)
    item = item[0]

    const [mainImg, setMainImg] = useState(item.img)

    const changeImage = (e) => {
        setMainImg(e.target.src)
    }

    const handleCartItems = (e) => {
        const newItems = {
            img: item.img,
            price,
            quantity,
            title: item.description
        }

        const checkItems = cartItems.some(el => el.title === newItems.title)
        if(!checkItems) {
            setCartItems([...cartItems, newItems])
            setQuantity(1)
        }else {
            console.log('already in cart')
        }
        
    }


    useEffect(() => {
        setPrice(() => item.price * quantity)
    }, [quantity])

    return (
        <main className='product-page'>
            <h1 className='product-page-heading'>{item.description}</h1>
            <div className='product-page-header'>
                <div className="product-images">
                    <img width={340} height={400} src={mainImg} alt="product-image" />
                    <div className="other-images">
                        <div><img onMouseEnter={e => changeImage(e)} width={120} height={120} src={item.img} alt="" /></div>
                        <div><img onMouseEnter={e => changeImage(e)} width={120} height={120} src={item.otherImgs[0]} alt="" /></div>
                        <div><img onMouseEnter={e => changeImage(e)} width={120} height={120} src={item.otherImgs[1]} alt="" /></div>
                    </div>
                </div>
                
                <div className="product-info">
                    <p className='product-info-specs'>{item.specs}</p>
                    <div className='buy-thingy'>
                        <h2>Quantity</h2>
                        <div >
                            <ButtonGroup size='large' color='inherit'>
                                <Button onClick={() => quantity > 1 ? setQuantity(prev => prev - 1) : null} sx={{backgroundColor: "white"}}>
                                    <i className="fa-solid fa-arrow-left"></i>
                                </Button>
                                <Button disabled color='secondary'>
                                    {quantity}
                                </Button>
                                <Button onClick={() => quantity < 10 ? setQuantity(prev => prev + 1) : null} sx={{backgroundColor: "white"}}>
                                    <i className="fa-solid fa-arrow-right"></i>
                                </Button>
                            </ButtonGroup>
                        </div>
                        <h2>${price}</h2>
                    </div>
                    <div >
                        <button onClick={e => handleCartItems(e)} className='add-to-cart-btn'>ADD TO CART</button>
                        <button className='buy-now-btn'>BUY NOW</button>
                    </div>
                </div>
            </div>
            <div className="product-specs">
                <div>
                    <h2>Texture:</h2>
                    <p>{item.texture}</p>
                </div>
                <div>
                    <h2>Weight:</h2>
                    <p>{item.weight}</p>
                </div>
                <div>
                    <h2>Size:</h2>
                    <p>{item.size}</p>
                </div>
            </div>
            <Trending/>
        </main>
    );
}
 
export default ProductPage;