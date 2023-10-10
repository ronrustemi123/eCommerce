import { useParams } from 'react-router-dom';
import './ProductPage.css'
import {items} from '../AllData'
import Trending from '../Trending'
import { Button, ButtonGroup } from '@mui/material';
import { useState } from 'react';

const ProductPage = () => {

    const {itemId} = useParams()

    let item = items.filter(el => el.id == itemId)
    item = item[0]

    const [mainImg, setMainImg] = useState(item.img)

    const changeImage = (e) => {
        setMainImg(e.target.src)
    }

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
                                <Button sx={{backgroundColor: "white"}}>
                                    <i className="fa-solid fa-arrow-left"></i>
                                </Button>
                                <Button disabled color='secondary'>
                                    0
                                </Button>
                                <Button sx={{backgroundColor: "white"}}>
                                    <i className="fa-solid fa-arrow-right"></i>
                                </Button>
                            </ButtonGroup>
                        </div>
                        <h2>$123</h2>
                    </div>
                    <div >
                        <button className='add-to-cart-btn'>ADD TO CART</button>
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