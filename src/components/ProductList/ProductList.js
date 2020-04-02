import React, { Component } from 'react';

class ProductList extends Component {
    render() {
        return(
            <div className="listProduct"> 
                <h4>Danh sách sản phẩm</h4>
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                        <th scope="col">#Stt</th>
                        <th scope="col">Mã sp</th>
                        <th scope="col">Tên</th>
                        <th scope="col">Giá</th>
                        <th scope="col">Trạng thái</th>
                        <th scope="col">Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.children}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ProductList;

