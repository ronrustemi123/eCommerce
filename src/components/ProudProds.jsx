import './ProudProds.css'
import {items} from './AllData'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import ProductItem from './ProductItem';
import { Link } from 'react-router-dom';


const ProudProds = () => {

 

    const products = items.filter(el => el.id < 9)

    return (
        <section className='proud-prods'>
            <h1 className='proud-prods-heading'>Products we are proud of</h1>
            <Grid2 justifyContent='center' spacing={3} wrap='wrap' container columns={{lg: 4, xs: 1, sm: 2}} >
                {products.map(el => {
                    return(
                        <Grid2 key={el.description} xs={1}>
                            <Link onClick={() => window.scrollTo(0, 0)}  style={{textDecoration: 'none', color: 'black'}}  to={`/product/${el.id}`}>
                                <ProductItem img={el.img} price={el.price} name={el.description}/>
                            </Link>
                        </Grid2>
                    )
                })}
            </Grid2>
        </section>
    );
}
 
export default ProudProds;