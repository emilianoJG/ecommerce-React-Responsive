
export const initialState={
    basket:[],
    user: null,
}
export const actionTypes={
    ADD_TO_BASKET: "ADD_TO_BASKET",
    REMOVE_ITEM: "REMOVE_ITEM",
    SET_USER: "SET_USER",
    EMPTY_BASKET: "EMPTY_BASKET"
}

//funcion array.reduce() para la suma total
export const getBasketTotal = (basket) =>{
    return basket?.reduce((amount, item)=> item.price + amount,0)
};


const reducer = (state, action)=>{
    console.log(action);
    switch(action.type){
        //action add item shopingcart
        case "ADD_TO_BASKET":
        return{
            ...state, 
            basket: [...state.basket, action.item]
        };
        //accion remove item selected
        case "REMOVE_ITEM":
            //selecciona la ubicacion del array seleccionado para eliminar solo el objeto seleccionado y no todos los que tengan el mismo id
        const index = state.basket.findIndex((basketItem=> basketItem.id === action.id))
        let newBasket = [...state.basket];
        if(index>=0){
            newBasket.splice(index, 1)
        }else{console.log("cant remove produt")}
        return{                        
            ...state,
            basket: newBasket,
        }
        case "SET_USER":
            return {
                ...state,
                user: action.user
            }
        case "EMPTY_BASKET":
            return {
            ...state,
            action: action.basket
        }
        default: return state;            
    }    
}

export default reducer