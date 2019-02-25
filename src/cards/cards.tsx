import React, { Component } from "react";
import { Card, CardComponent } from "./card";

export interface ICardsProperty {
    Cards:Card[];
}
export interface ICardsState {
    Cards:Card[];
}
export class CardsComponent extends Component<ICardsProperty, ICardsState> {
    constructor(props:ICardsProperty){
        super(props);
        this.state = { Cards:props.Cards };
    }
    render() {
        return (
            <div className='row'>
                {this.state.Cards.map(t => (<CardComponent Card={t} key={t.id}/>))}
            </div>
        );
    }
}