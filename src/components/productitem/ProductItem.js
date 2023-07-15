import React,{useContext} from 'react';
import styles from './ProductItem.module.css'
import { shorten } from '../../functions/Shorten';
import {Link} from 'react-router-dom';
import { quantitycount } from '../../functions/quantitycount';
//contex
import { CartContex } from '../../contex/CartContexProvider';
import{BsTrash} from 'react-icons/bs'

const ProductItem = ({productData}) => {
    const{state,dispatch}=useContext(CartContex)
    return (
        <div className={styles.total}>
            <img className={styles.ax} src={productData.image} alt="product" />
            <h3 className={styles.title}>{shorten(productData.title)}</h3>
            <h5>price : {productData.price} $ </h5>
            <div className={styles.footer}>
                <Link to={`/product/${productData.id}`}><div className={styles.footerleft}>Details</div></Link>
               <div className={styles.buttons}>
               {
                  quantitycount(state,productData.id) > 1  &&  <button onClick={() => dispatch({ type :'DOWN',payload : productData})} className={styles.footerright} > - </button>
                 }

                {
                  quantitycount(state,productData.id) === 1  &&  <button onClick={() => dispatch({type :'DELETE',payload : productData})} className={styles.footerright} > <BsTrash color='white' size="12px" style={{backgroundColor:"rgb(24, 112, 227)"}}/> </button>
                }
                {
                  quantitycount(state,productData.id) > 0 && <span style={{display:'flex',alignItems:'center',color:'blue',fontWeight:'bold'}}>{ quantitycount(state,productData.id) }</span>
                }

                { 
                  state.selectedItems.find(item => item.id === productData.id) ?
                  <button onClick={()=>dispatch({type:'UP', payload:productData})} className={styles.footerright}> + </button>:
                  
                  <div onClick={()=>dispatch({type:'ADD-TO-CART',payload:productData})} className={styles.footerright}>add to cart</div>
                }
               </div>
               
            </div>
        </div>
    );
};

export default ProductItem;