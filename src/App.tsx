import React, { Component } from 'react';
import { SearchCriteriaComponent } from './search/search.criteria.component';
import { SearchResultsComponent } from './search/search.results.component';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-2">
              <SearchCriteriaComponent></SearchCriteriaComponent>
            </div>
            <div className="col">
              <SearchResultsComponent></SearchResultsComponent>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
