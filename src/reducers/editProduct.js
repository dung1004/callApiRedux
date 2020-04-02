import * as types from './../constants/actionTypes';

const initialState = {};

const editProduct = (state = initialState, action) => {
    switch(action.type) {
        case types.EDIT_PRODUCT:

           return action.product
            
        default: 
            return state;
    }
}

export default editProduct;