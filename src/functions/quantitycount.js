 export const quantitycount=(data,id)=>{
    const index=data.selectedItems.findIndex(item => item.id === id)
    if(index === -1){
        return false
    }
    else{
        return data.selectedItems[index].quantity;
    }
}