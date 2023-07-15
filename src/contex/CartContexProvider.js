import React,{useReducer} from 'react';
import { createContext } from 'react';
const initialState={
    selectedItems:[],
    totalPrice:0,
    itemsCounter:0,
    checkout:false
}
const total=(data)=>{
    const itemsCounter=data.reduce((cur,item)=> cur+item.quantity,0)
    const totalPrice=data.reduce((cur,item)=>cur + item.price * item.quantity,0).toFixed(2)
    return{itemsCounter,totalPrice}
}
const cartReducer=(state,action)=>{
    console.log(state)
    switch(action.type){
        case 'ADD-TO-CART':
            if(!state.selectedItems.find(item => item.id === action.payload.id)){
                state.selectedItems.push({
                    ...action.payload,
                    quantity : 1
                })
                return{
                    ...state,
                   ...total(state.selectedItems),
                   checkout:false

                    
                }
            }
        break    
        case 'DELETE':
            const newselectedItems=state.selectedItems.filter(item => item.id !== action.payload.id)
            return{
                ...state,
                selectedItems:[...newselectedItems],
                ...total(newselectedItems)
            }
            
        case "UP":
            const indexU=state.selectedItems.findIndex (item => item.id === action.payload.id)
            state.selectedItems[indexU].quantity++;
            return{
                ...state,
                ...total(state.selectedItems)
            }       
        case "DOWN":
            const indexD=state.selectedItems.findIndex (item => item.id === action.payload.id)
            state.selectedItems[indexD].quantity--;
            return{
                ...state,
                ...total(state.selectedItems)
            } 
        case "CHECKOUT":
            return{
                selectedItems:[],
                totalPrice:0,
                itemsCounter:0,
                checkout:true,
            }
        case "CLEAR":
            return{
                selectedItems:[],
                totalPrice:0,
                itemsCounter:0,
                checkout:false,
            }
        default:
            return state    

    }
}
export const CartContex=createContext()
const CartContexProvider = ({children}) => {
    const[state,dispatch]=useReducer(cartReducer,initialState)
    return (
        <CartContex.Provider value={{state,dispatch}}>
                  {children}
        </CartContex.Provider>
            
        
    );
};

export default CartContexProvider;