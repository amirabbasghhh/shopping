import React,{useContext} from 'react';
import {useParams,Link} from "react-router-dom";
import { productscontex } from '../../contex/ApiContexProvider';
import styles from './Product.module.css'
const Product = () => {
    const products=useContext(productscontex)
    const productId=useParams().productId
    return (
        <div className={styles.total} >
            <div className={styles.row}>
                <div className={styles.col}>
                    <img src={products[productId-1].image} alt="" />
                </div>
                <div className={styles.col}>
                    <div className={styles.right}>
                        <p style={{color:"blue" ,fontWeight:"bold",fontSize:'30px'}}>{products[productId-1].title}</p>
                        <p style={{textAlign:'justify'}}>{products[productId-1].description}</p>
                        <p style={{fontWeight:'bold'}}><span style={{color:"#fdbd04",fontWeight:"bold"}}>category : </span>{products[productId-1].category}</p>
                        <div className={styles.footer}>
                              <button style={{backgroundColor:'#15c740',color:'white',padding:'10px',borderRadius:'10px',outline:"none",border:"none"}}>{products[productId-1].price} $</button>
                              <Link to="/"> <button style={{backgroundColor:'#2054e9',color:'white',padding:'8px',borderRadius:'10px',border:'none',cursor:'pointer'}}>back to shop</button></Link>
                        </div>


                    </div>
                </div>

            </div>
        </div>
    );
};

export default Product;