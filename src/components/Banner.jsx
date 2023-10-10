import './Banner.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react';

import { CategoryContext } from '../Context/CategoryContext';

const Banner = ({img, place, title, desc}) => {

    const {setCategory} = useContext(CategoryContext)

    return (
        <section className='banner'>
            <div>
                <h1>{title}</h1>
                <h2>{desc}</h2>
                <Link to={'/categories'} onClick={() => {window.scrollTo(0, 0), setCategory('all')}}>
                    <button>shop now <i className="fa-solid fa-arrow-right"></i></button>
                </Link>
            </div>
            <img style={{order: place}} src={img} alt="bannerImage" />
        </section>
    );
}
 
export default Banner;