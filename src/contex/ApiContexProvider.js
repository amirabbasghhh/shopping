import React,{useState,createContext,useEffect} from 'react';
import axios from "axios";
export const productscontex=createContext()
const ApiContexProvider = ({children}) => {
    const[products,setProducts]=useState([])
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
        .then(res => setProducts(res.data)) 
        
    }, [])
    return (
        <div>
            <productscontex.Provider value={products}>
                 {children}
            </productscontex.Provider>
        </div>
    );
};

export default ApiContexProvider;