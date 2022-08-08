import Object from './../../../object/object'

export default function listReducer (state = Object(), 
    action){
    
    switch(action.type){
                    
        case 'edit': 
            return  action.payload
 
        default:
        return state
    } 
}