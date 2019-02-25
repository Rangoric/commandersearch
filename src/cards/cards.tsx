import React, { Component } from "react";
import { Card, CardComponent } from "./card";

export interface ICardsProperty {
    Cards:Card[];
}
export interface ICardsState {
    Cards:Card[];
}
export class CardsComponent extends Component<ICardsProperty> {
    constructor(props:ICardsProperty){
        super(props);
    }
    render() {
        return (
            <div className='row'>
                {this.props.Cards.map(t => (<CardComponent Card={t} key={t.id}/>))}
            </div>
        );
    }
}