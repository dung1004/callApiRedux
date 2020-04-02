import * as types from './../constants/actionTypes';

let initialState = [];

const products = (state = initialState, action) => {
    switch(action.type) {
        case types.FETCH_PRODUCT:
            state = action.products;
            return [...state];

        case types.DELETE_PRODUCT:
            state = state.filter(product => product.id !== action.id);
            return [...state];

        case types.UPDATE_PRODUCT: 
           state = state.map(item => {
               if(item.id === action.product.id){
                  return {
                        ...item,
                        name: action.product.name,
                        price: action.product.price,
                        status: action.product.status
                    }
               }else {
                   return item
               }
           })

           return [...state];
           
        case types.ADD_PRODUCT:
           state.push(action.product);
            return [...state];

        default: 
            return [...state];
    }
}

export default products;