import React, { Component } from 'react';
import escapeRegExp from 'escape-string-regexp'

class ListView extends Component {

    state = {
        query: ''
    }

    updateSearch = (query) => {
        this.setState({
            query: query.trim()
        })
        this.updateListOfPlaces(query)
    }

    updateListOfPlaces = (query) => {
        // Check if search term match something in places
        if (query) {
            const match = new RegExp(escapeRegExp(query), 'i');
            this.props.updateListOfPlaces(this.props.places.filter((place) => match.test(place.name)))
        } else {
            this.props.updateListOfPlaces(this.props.places);
        }
    }
    
    render() {
        return (
            <div className="list-view">
                <input
                    type="text"
                    id="filter"
                    placeholder="Filter by name"
                />
                {this.props.filteredPlaces && 
                    <ul className="filtered-list">
                        {this.props.filteredPlaces.map((place) =>
                            <li
                                className="li-place"
                                key={place.id}
                                onClick={() => this.props.clickOpenInfoWindow(place.id)}
                            >
                            {place.name}
                            </li>
                        )}
                    </ul>
                }
            
            </div>
        )
    }
}

export default ListView