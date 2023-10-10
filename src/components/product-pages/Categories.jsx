import './Categories.css'
import { Stack } from '@mui/material';
import {items} from '../AllData'
import ProductItem from '../ProductItem'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { Link } from 'react-router-dom';

import { useContext } from 'react';
import { CategoryContext } from '../../Context/CategoryContext';

const Categories = () => {

    const {category, setCategory} = useContext(CategoryContext)

    const categoryName = ['all', 'furniture', 'electronic', 'lamp', 'kitchen', 'chair', 'skin-care']

    const filterItems = items.filter(el => el.category === category && category !== 'all')

    return (
        <main className='categories-page'>
            <div className="categories-header">
                <Link onClick={() => window.scrollTo(0, 0)} to={'/'} style={{textDecoration: 'none', color: 'black'}}><p><i className="fa-solid fa-chevron-left"></i> Home</p></Link>
                <h1 className='category-heading'>{category.toUpperCase()}</h1>
            </div>
            <div className="categories">
                <Stack flexWrap={'wrap'} rowGap={1.5} justifyContent={'center'} mt={8} spacing={1.8} direction={'row'}>
                    {categoryName.map((el, i) => <p onClick={() => setCategory(el)} key={i}>{el}</p>)}
                </Stack>
            </div>
            <Grid2 mt={8} justifyContent='flex-start' spacing={3} wrap='wrap' container columns={{lg: 4, xs: 1, sm: 2}} >
                {category !== 'all' ? filterItems.map(el => {
                    return(
                        <Grid2 key={el.description} xs={1}>
                            <Link onClick={() => window.scrollTo(0, 0)}  style={{textDecoration: 'none', color: 'black'}}  to={`/product/${el.id}`}>
                                <ProductItem img={el.img} price={el.price} name={el.description}/>
                            </Link>
                        </Grid2>
                    )
                    }) : items.map(el => {
                        return(
                            <Grid2 key={el.description} xs={1}>
                                <Link onClick={() => window.scrollTo(0, 0)}  style={{textDecoration: 'none', color: 'black'}}  to={`/product/${el.id}`}>
                                    <ProductItem img={el.img} price={el.price} name={el.description}/>
                                </Link>
                            </Grid2>
                        )
                    })}
            </Grid2>
        </main>
    );
}
 
export default Categories;