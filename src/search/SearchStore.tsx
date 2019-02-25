import React, { Component, useImperativeHandle, EventHandler, FormEvent } from 'react';
import { Card } from '../cards/card';
import axios from 'axios';

export class SearchCriteria {
    name:string = "";
    type:string = "";
    text:string = "";
    orderBy:string = "name";
}

class ApiResult {
    cards:Card[] = [];
}
export class SearchData {
    constructor(){
    }
    Results:Card[] = [];
    Criteria:SearchCriteria = new SearchCriteria();
}

export class SearchStoreState {
    SearchData = new SearchData();
    refreshResults:() => void = () => {};
    onCriteriaChange:(event:FormEvent<HTMLInputElement>) => void = (event:FormEvent<HTMLInputElement>) => {};
    clearCriteria:() => void = () => {};
}

export const SearchContext = React.createContext(new SearchStoreState());

export class SearchStore extends Component<{}, SearchData> {
    constructor(props:{}) {
        super(props,new SearchData());
        this.refreshResults = this.refreshResults.bind(this);
        this.onCriteriaChange = this.onCriteriaChange.bind(this);
        this.clearCriteria = this.clearCriteria.bind(this);
        this.state = new SearchData();
    }
    async refreshResults() {
        const result = 
            await axios.get<ApiResult>(
                "https://api.magicthegathering.io/v1/cards",
                {
                    params:this.state.Criteria
                });

        this.setState({Results:result.data.cards.filter(t => t.imageUrl)});
    }
    onCriteriaChange(event:FormEvent<HTMLInputElement>) {
        var targetElement = event.currentTarget;
        var targetName = targetElement.name;
        var targetValue = targetElement.value;
        this.setState({Criteria:{...this.state.Criteria, [targetName]:targetValue}});
    }
    clearCriteria() {
        this.setState({Criteria:new SearchCriteria(), Results:[]});
    }
    render() {
        return (
            <SearchContext.Provider value={{
                SearchData:this.state, 
                refreshResults:this.refreshResults,
                onCriteriaChange:this.onCriteriaChange,
                clearCriteria:this.clearCriteria}}>
                {this.props.children}
            </SearchContext.Provider>
        );
    }
}