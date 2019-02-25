import React, { Component, FormEvent } from 'react';
import { SearchContext } from './SearchStore';

const TextSearchCriteria = (label:string, name:string, value:string, onChange:(event:FormEvent<HTMLInputElement>) => void) =>
    <div className="row">
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input
                className="form-control"
                name={name}
                id={name}
                value={value}
                onChange={onChange}/>
        </div>
    </div>

export class SearchCriteriaComponent extends Component {
    render() {
        return (
            <div>
                <p>Search Criteria</p>
                <SearchContext.Consumer>
                    { ({SearchData, refreshResults, onCriteriaChange, clearCriteria}) => (
                        <div>
                            {TextSearchCriteria("Name Filter:", "name", SearchData.Criteria.name, onCriteriaChange)}
                            {TextSearchCriteria("Type Filter:", "type", SearchData.Criteria.type, onCriteriaChange)}
                            {TextSearchCriteria("Text Filter:", "text", SearchData.Criteria.text, onCriteriaChange)}
                            <div className="row">
                                <div className="col-6">
                                    <button className='btn btn-primary' onClick={refreshResults}>Search</button>
                                </div>
                                <div className="col-6">
                                    <button className="btn btn-secondary" onClick={clearCriteria}>Clear</button>
                                </div>
                            </div>
                        </div>
                    )}
                </SearchContext.Consumer>
            </div>
        );
    }
}