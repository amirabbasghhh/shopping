import React,{useContext} from 'react';
import  styles from'./Cartitem.module.css';
import{BsTrash} from 'react-icons/bs'
//contex
import { CartContex } from '../../contex/CartContexProvider';
//function 
import { shorten } from '../../functions/Shorten';

const CartItem = (props) => {
    const{quantity,image,price,title}=props.data
    const{dispatch}=useContext(CartContex)
    return (
        <div className={styles.total}>
            <div className={styles.row}>
                <div className={styles.col}><img src={image} alt="ax" /></div>
                <div className={styles.col}>
                   <div style={{paddingInline:'40px'}}>
                   <p style={{fontWeight:"bold" ,color:"#0390fc"}}>{shorten(title)}</p>
                    <p style={{color:"#2bf507",fontWeight:"bold"}}>{price} $</p>
                   </div>
                </div>
                <div className={styles.col}><span className={styles.spa}>{quantity}</span></div>
                <div className={styles.col}>
                {quantity === 1 ? <button onClick={()=>dispatch({type : "DELETE" ,payload : props.data})}><BsTrash style={{backgroundColor:"#0390fc",fontWeight:"bold"}}  color='white'/></button> :
                <button onClick={()=>dispatch({type : "DOWN" , payload : props.data})}><span style={{fontWeight:"bold"}}>-</span></button>
            }
            {
                <button onClick={()=>dispatch({type : "UP" ,payload : props.data})}><span style={{fontWeight:"bold"}}>+</span></button>
            }



                </div>

            </div>
        </div>
    );
};

export default CartItem;