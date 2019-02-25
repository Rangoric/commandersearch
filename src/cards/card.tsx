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
export interface ICardState {
    Card:Card;
}
export class CardComponent extends Component<ICardProperty, ICardState> {
    constructor(props:ICardProperty) {
        super(props);
        this.state = {Card:props.Card};
    }
    render() {
        return (
            <div className="col-4">
                <div className='card'>
                    <img className='card-image-top' src={this.state.Card.imageUrl} alt={this.state.Card.name}/>
                    <div className='card-header'>{this.state.Card.name}<br/>({this.state.Card.setName})</div>
                    <div className='card-body'>
                        <p>{this.state.Card.type}</p>
                        <p>{this.state.Card.text}</p>
                    </div>
                </div>
            </div>
        );
    }
}