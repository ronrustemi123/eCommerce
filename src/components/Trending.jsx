import './Trending.css'
import ProductItem from './ProductItem'
import {items} from './AllData'
import { Stack } from '@mui/material'
import { useRef, useContext } from 'react'
import { Link } from 'react-router-dom'

import { CartContext } from '../Context/CartContext'

const Trending = () => {

    const {setPrice, setQuantity} = useContext(CartContext)

    const products = items.filter(el => el.id > 8 && el.id <= 20)

    const sliderRef = useRef(null)
    const scrollAmount = 244


    return (
        <section className='trending'>
            <div className="trending-heading">
                <h2>Trending Now</h2>
                <div>
                    <i onClick={() => {
                        const container = sliderRef.current
                        container.scrollLeft -= scrollAmount
                    }} className="fa-solid fa-arrow-left scroll-button"></i>
                    <i onClick={() => {
                        const container = sliderRef.current
                        container.scrollLeft += scrollAmount
                    }} className="fa-solid fa-arrow-right scroll-button"></i>
                </div>
            </div>
            <Stack sx={{scrollBehavior: 'smooth', transition: 'scroll 0.3s ease-in-out'}} ref={sliderRef} direction={'row'} overflow={"auto"} spacing={3}>
                {products.map(el => {
                    return(
                        <Link onClick={() => {window.scrollTo(0, 0), setPrice(el.price), setQuantity(1)}} style={{textDecoration: 'none', color: 'black'}} key={el.description} to={`/product/${el.id}`}>
                            <ProductItem  imgWidth='215px' customHeight="300px" img={el.img} name={el.description} price={el.price}/>
                        </Link>
                    )
                })}
            </Stack>
        </section>
    );
}
 
export default Trending;