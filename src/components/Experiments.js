import React, { Component } from 'react';
import util from '../util'
export default class Experiments extends Component {

    render() {
        const productItems = this.props.products.map(product => (
            <div className="col-md-3" key={product.id}>
                <div className="thumbnail text-center">
                    <a href={`#${product.id}`}onClick={(e)=>this.props.handleAddToCart(e, product)}>
                        <img src={`products/${product.sku}_2.jpg`} alt={product.title} />
                                              
                    </a>
                     <b>{product.title}</b> 
                     <p><b>{product.num}</b> </p>
                      <p>{product.typeList}</p> 
                    <p> <b>POWER: {(product.price)}</b> </p>
                    <button className="btn btn-primary" onClick={(e)=>this.props.handleAddToCart(e, product)}>Add to Team!</button>
                </div>
            </div>
        ));

        return (
            <div className="row">
                {productItems}
            </div>
        )
    }
}
