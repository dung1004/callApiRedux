/* eslint-disable no-restricted-globals */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductItem extends Component {
    onDelete = (id) => {
        if(confirm("Bạn có chắc chắn muốn xóa ?")) {
            this.props.onDelete(id);
        }
    }

    render() {
        const { index, product } = this.props;
        return(
            <tr>
                <th scope="row">{index+1}</th>
                <td> {product.id} </td>
                <td> {product.name} </td>
                <td> { product.price } </td>
                <td className="status">
                    <span className={product.status ? 'btn t' : 'btn f'}>
                        { product.status ? 'Còn hàng' : 'Hết hàng' }
                    </span>
                </td>
                <td>
                    <Link 
                        to={`product/${product.id}/edit`} 
                        className="btn btn-success mr-2">Sửa</Link>
                    <button onClick={ () => this.onDelete(product.id) } className="btn btn-danger">Xóa</button>
                </td>
            </tr>
        );
    }
}

export default ProductItem;

