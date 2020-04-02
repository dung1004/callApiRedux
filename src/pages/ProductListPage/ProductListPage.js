import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import ListProduct from './../../components/ProductList/ProductList';
import ProductItem from './../../components/ProductItem/ProductItem';
import { fetchProductsRequest, deleteProductRequest } from './../../actions/index'


class ProductListPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }
    componentDidMount() {
        this.props.fetchAllProducts();
    }
    onDelete = (id) => {
        let {onDeleteProduct} = this.props;

        onDeleteProduct(id);
    }
    render() {
        var { products } = this.props;
        return (
            <div>
                 <Link to="/product/add" className="btn btn-primary mt-3 ml-5">Thêm sản phẩm</Link>
                 <ListProduct>
                     { this.showProduct(products) }
                 </ListProduct>
            </div>
        )
    }

    showProduct = (products) => {
        let result = null;
        if(products.length > 0) {
            result = products.map((product, index) => {
                return (
                    <ProductItem
                        key={index}
                        product={product}
                        index={index}
                        onDelete={this.onDelete}
                        // onDeleteProduct={this.props.onDeleteProduct}
                    />
                )
            })
        }
        return result;
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
       fetchAllProducts: () => {
           dispatch(fetchProductsRequest());
       },
       onDeleteProduct: (id) => {
           dispatch(deleteProductRequest(id));
       }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);