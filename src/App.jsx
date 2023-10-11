import { Route, Routes } from 'react-router-dom'
import './App.css'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Header from './components/Header'
import Navigation from './components/Navigation'
import Newsletter from './components/Newsletter'
import ProudProds from './components/ProudProds'
import Trending from './components/Trending'

import bannerImg1 from './img/banner/banner1.jpg'
import bannerImg22 from './img/banner/banner2.jpg'
import ProductPage from './components/product-pages/ProductPage'
import Categories from './components/product-pages/Categories'

import { useState } from 'react'

import {CategoryContext} from './Context/CategoryContext'
import {CartContext} from './Context/CartContext'


function App() {

  const [category, setCategory] = useState('all')

  const [quantity, setQuantity] = useState(1)
  const [price, setPrice] = useState(null)
  const [totalPrice, setTotalPrice] = useState(null)

  const [cartItems, setCartItems] = useState([])

  return (
    <>
      <CartContext.Provider value={{quantity, setQuantity, price, setPrice, cartItems, setCartItems}}>
        <CategoryContext.Provider value={{category, setCategory}}>
          <Navigation/>
          <Routes>
            <Route path='/' element={<>
              <Header/>
              <ProudProds/>
              <Banner title='Creative harmonious living'
                desc='RAOUF Products are all made to standard sizes so that you can mix and match them freely.'
                place={1}
                img={bannerImg1}
              />
              <Trending/>
              <Banner title={'Comfortable & Elegante Living'}
                desc={'RAOUF Products are all made to standard sizes so that you can mix and match them freely.'}
                img={bannerImg22}
                place={-1}
              />
            </>}/>
            <Route path='/categories' element={<Categories/>}>
              <Route path=':category' />
            </Route>
            <Route exact path='/product'>
                <Route path=':itemId' element={<ProductPage/>}/>
            </Route>
          </Routes>
          <Newsletter/>
          <Footer/>
        </CategoryContext.Provider>
      </CartContext.Provider>
    </>
  )
}

export default App
