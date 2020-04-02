import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import callApi from './../../utils/callApi';
import { addProductRequest, editProductRequest, updateProductRequest } from '../../actions/index';

class ProductAddPage extends Component {
    constructor() {
        super();
        this.state = {
            nameProduct: '',
            price: '',
            checkStatus: ''
        }   
    }

    componentDidMount() {
        const { match } = this.props;
        if(match && match.params) {
            this.props.editProduct(match.params.id);

        }
          
    }
    componentWillReceiveProps(nexProps) {
        const { name, status, price, id } = nexProps.showProductEdit;
        if(nexProps && nexProps.showProductEdit) {
            this.setState({
                id: id,
                nameProduct: name,
                price: price,
                checkStatus: status
            })
        }
        
    }

    onChange = (e) => {
        let { name } = e.target;
        let value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        this.setState({
            [name]: value
        })
    }

    onAddProduct = (e) => {
        e.preventDefault();

        let { nameProduct, price, checkStatus, id } = this.state;
        var { history } = this.props;

        var product = {
            id: id,
            name: nameProduct,
            price: price,
            status: checkStatus
        }

        if(id) {
            this.props.updateProduct(product);

        }else {
            this.props.onAddProduct(product);

        }

        history.goBack();
    
    }

    render() {
        const { nameProduct, price, checkStatus } = this.state;
        const { match } = this.props;
            
        return (
            <div>
                <h3 className="text-center mt-2"> { match && match.params && match.params.id ? 'Sửa sản phẩm' : 'Thêm sản phẩm'}  </h3>

                <div className="container">
                    <div className="row">
                        <div className="col-md-6 offset-3">
                            <form onSubmit={this.onAddProduct}>
                                <div className="form-group">
                                    <label>Tên sản phẩm</label>
                                    <input 
                                        type="text" 
                                        className=" form-control" 
                                        name="nameProduct"
                                        value = {nameProduct}
                                        onChange = {this.onChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Giá sản phẩm</label>
                                    <input 
                                        type="number" 
                                        className=" form-control" 
                                        name="price"
                                        value = {price}
                                        onChange = {this.onChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label className="mr-2">Trạng thái</label>
                                    <input 
                                        type="checkbox"
                                        name="checkStatus"
                                        value={checkStatus}
                                        onChange={this.onChange}
                                        checked={checkStatus}
                                    />
                                  
                                    Còn hàng
                                </div>

                                <button type="submit" className="btn btn-primary mr-2">
                                    { match && match.params && match.params.id ? 'Lưu lại' : 'Thêm mới'}
                                </button>
                                <Link to="/product-list"  className="btn btn-danger">Quay lại</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        showProductEdit: state.editProduct
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddProduct: (product) => {
            dispatch(addProductRequest(product));
        },
        editProduct: (product) => {
            dispatch(editProductRequest(product));
        },
        updateProduct: (product) => {
            dispatch(updateProductRequest(product))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductAddPage);