
export default function listReducer (state = false, 
    action){
    
    switch(action.type){
                    
        case 'edit': 
            return  !action.payload
 
        default:
        return state
    } 
}