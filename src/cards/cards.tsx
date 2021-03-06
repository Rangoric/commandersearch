import React, { Component } from "react";
import { Card, CardComponent } from "./card";

export interface ICardsProperty {
    Cards:Card[];
}

export class CardsComponent extends Component<ICardsProperty> {
    constructor(props:ICardsProperty){
        super(props);
    }
    render() {
        return (
            <div>
                <div className='row'>
                    {this.props.Cards.map(t => (<CardComponent Card={t} key={t.id}/>))}
                </div>
            </div>
        );
    }
}