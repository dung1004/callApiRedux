import * as types from '../constants/actionTypes';
import callApi from '../utils/callApi';

export const fetchProductsRequest = () => {
    return (dispatch) => {
        return callApi('products', 'GET', null).then(res => {
            dispatch(fetProducts(res.data));
        })
    }
}

export const fetProducts = (products) => {
    return {
        type: types.FETCH_PRODUCT,
        products
    }
}

export const deleteProductRequest = (id) => {
    return (dispatch) => {
        return callApi(`products/${id}`, 'DELETE', null).then(res => {
            dispatch(deleteProduct(id))
        })
    }
}

export const deleteProduct = (id) => {
    return {
        type: types.DELETE_PRODUCT,
        id
    }
}

export const updateProductRequest = (product) => {
    return (dispatch) => {
        return callApi(`products/${product.id}`, 'PUT', product).then(res => {
            dispatch(updateProduct(res.data))
        })
    }
}

export const updateProduct = (product) => {
    return {
        type: types.UPDATE_PRODUCT,
        product
    }
}

export const addProductRequest = (product) => {
    return (dispatch) => {
        return callApi('products', 'POST', product).then(res => {
            dispatch(addProduct(res.data))
        })
    }
}

export const addProduct = (product) => {
    return {
        type: types.ADD_PRODUCT,
        product
    }
}

export const editProductRequest = (id) => {
    return (distpatch) => {
        return callApi(`products/${id}`, 'GET', null).then(res => {
            distpatch(editProduct(res.data))
        })
    }
}

export const editProduct = (product) => {
    return {
        type: types.EDIT_PRODUCT,
        product
    }
}