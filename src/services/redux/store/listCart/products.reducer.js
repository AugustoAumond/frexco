
export default function ProductsReducer (state = JSON.parse(localStorage.getItem('List_products')) ? JSON.parse(localStorage.getItem('List_products')) : [] , 
    action){
    
    switch(action.type){
                    
        case 'edit': 
            return  action.payload
 
        default:
        return state
    } 
}