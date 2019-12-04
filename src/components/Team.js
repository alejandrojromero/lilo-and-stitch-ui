import React, { Component } from 'react';
import util from '../util'
export default class Basket extends Component {
    render() {
        const { cartItems } = this.props;

        return (
            <div className="alert alert-info">
            {<div> <b>YOUR TEAM</b> </div>}
                {cartItems.length === 0
                    ? "Looks like your team is empty! Add experiments to your team!" :
                    <div>You have {cartItems.length} experiment(s) in your team! <hr /></div>
                }
                {cartItems.length > 0 &&
                    <div>
                        <ul style={{ marginLeft: -25 }}>
                            {cartItems.map(item => (
                                <li key={item.id}>
                                    <b>{item.title}</b>
                                    <button style={{ float: 'right' }} className="btn btn-primary btn-xs"
                                        onClick={(e) => this.props.handleRemoveFromCart(e, item)}>X</button>
                                    <br />
                                    {item.count} X {util.formatPwr(item.price)}
                                </li>))
                            }
                        </ul>
                        <b>TOTAL TEAM {util.formatPwr(cartItems.reduce((a, c) => (a + c.price * c.count), 0))}</b>
                    
                    </div>
                }
            </div>
        )
    }
}
