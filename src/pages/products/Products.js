import React,{useContext} from 'react';
import styles from './Products.module.css';
import ProductItem from '../../components/productitem/ProductItem';

//contex
import { productscontex } from '../../contex/ApiContexProvider';
import Navbar from '../../components/navabar/Navbar';
const Products = () => {
    const products=useContext(productscontex)
    return (
        <>
        <Navbar/>
        <div className={styles.container}>
            <div className={styles.row}>
                {products.map(product =>(
                    <div className={styles.col} key={product.id} >
                        <ProductItem productData={product} key={product.id}/>
                    </div>
                ))}
            </div> 
        </div>
        </>
    );
};

export default Products;