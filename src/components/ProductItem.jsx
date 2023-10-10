import './ProductItem.css'

const ProductItem = ({img, price, name, customHeight, imgWidth}) => {
    return (
        <div style={{height: customHeight}} className="prod-item">
            <img style={{width: imgWidth}} src={img} alt="" />
            <div>
                <h2>{name}</h2>
                <h1>${price}</h1>
            </div>
        </div>
    );
}
 
export default ProductItem;