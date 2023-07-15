import React,{useContext} from 'react';
import styles from './Navbar.module.css'
import{TbShoppingCart} from 'react-icons/tb'
import { CartContex } from '../../contex/CartContexProvider';
import { Link } from 'react-router-dom';

const Navbar = () => {
   const{state}= useContext(CartContex)
    return (
        <div style={{border:'1px solid lightGrey',boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',position:"sticky",top:"0px",marginBottom:"80px",zIndex:'5',backgroundColor:"white"}}>
            <div className={styles.total}>
            <div>
                <p style={{fontWeight:"bold",color:'blue',fontSize:"30px"}}><Link to='/'>products</Link></p></div>
            <div className={styles.right} style={{position:'relative'}}>
            <Link to='/cart'><TbShoppingCart size='35px' color='blue'/></Link>
            <span className={styles.numbershopping}>{state.itemsCounter}</span>
            </div>
            
        </div>
        </div>
    );
};

export default Navbar;