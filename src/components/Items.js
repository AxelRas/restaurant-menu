import React, { Component } from 'react'

export default class Items extends Component {
    render() {
        return (
            <div className="items">
                {this.props.data.map(item => (
                    <div key={item.image} className="item">
                        <img src={item.image} alt={item.image}></img>
                        <div className="item-text">
                            <div className="item-title-price">
                                <p className="item-title">{item.name}</p>
                                <p className="item-price">{"$"+item.price}</p>
                            </div>
                            <p className="item-desc">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}
