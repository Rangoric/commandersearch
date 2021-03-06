import React, { Component } from 'react';
import { SearchContext } from './SearchStore';
import { EmptyResults } from './empty.results';
import { CardsComponent } from '../cards/cards';

export class SearchResultsComponent extends Component {
    render() {
        return (
            <SearchContext.Consumer>
                {({SearchData}) => (
                    <div>
                        <h4>Search Results:</h4>

                        {SearchData.Results.length ? <CardsComponent Cards={SearchData.Results}/> : EmptyResults}
                    </div>
                )}
            </SearchContext.Consumer>
        );
    }
}