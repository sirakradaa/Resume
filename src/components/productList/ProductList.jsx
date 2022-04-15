import './productList.css'
import Product from './../product/Product';
import { CERTIFICATES } from './../../images/certificates';

const ProductList = () => {
  return (
    <div className="pl" id="certifications">
        <div className="pl-texts">
            <h1 className="pl-title">Certifications</h1>
            <p className="pl-desc">
                Here are some certificates that I have completed.
                Click the image to find the certificate ID!
            </p>
        </div>
        <div className="pl-list">
          {CERTIFICATES.map(item=>(
            <Product key={item.id} img={item.img} link={item.link}/>
          ))}
        </div>
    </div>
  );
};

export default ProductList