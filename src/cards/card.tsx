import React, { Component } from "react";

export class Card {
    name:string = "";
    type:string = "";
    text:string = "";
    id:string = "";
    setName:string = "";
    imageUrl:string = "";
}

export interface ICardProperty {
    Card:Card;
}

export class CardComponent extends Component<ICardProperty> {
    constructor(props:ICardProperty) {
        super(props);
    }
    render() {
        return (
            <div className="col-4">
                <div className='card'>
                    <img className='card-image-top' src={this.props.Card.imageUrl} alt={this.props.Card.name}/>
                    <div className='card-header'>{this.props.Card.name}<br/>({this.props.Card.setName})</div>
                    <div className='card-body'>
                        <p>{this.props.Card.type}</p>
                        <p>{this.props.Card.text}</p>
                    </div>
                </div>
            </div>
        );
    }
}