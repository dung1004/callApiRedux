import { combineReducers } from 'redux';

import products from './Products';
import editProduct from './editProduct';

const myReducers = combineReducers({
    products,
    editProduct
});

export default myReducers;