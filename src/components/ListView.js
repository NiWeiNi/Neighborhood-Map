import React, { Component } from 'react';
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

class ListView extends Component {

    state = {
        query: ''
    }

    updateSearch = (query) => {
        this.setState({
            query: query.trim()
        })
        this.updatePlaces(this.state.query)
    }

    updatePlaces = (query) => {
        // Check if search term match something in places
        if (query) {
            const match = new RegExp(escapeRegExp(query), 'i');
            this.props.updateListOfPlaces(this.props.places.filter((place) => match.test(place.name)))
        } else {
            this.props.updateListOfPlaces(this.props.places);
        }
    }
    
    render() {
        console.log(this.props.filteredPlaces)
        // Sort places by name
        this.props.filteredPlaces.sort(sortBy('name'))

        return (
            <div className="list-view">
                <input
                    type="text"
                    id="filter"
                    placeholder="Filter by name"
                    onChange={event => this.updateSearch(event.target.value)}
                />
                {this.props.filteredPlaces && 
                    <ul className="filtered-list">
                        {this.props.filteredPlaces.map((place) =>
                            <li
                                className="li-place"
                                key={place.venue.id}
                                onClick={() => this.props.clickOpenInfoWindow(place.venue.id)}
                            >
                            {place.venue.name}
                            </li>
                        )}
                    </ul>
                }
            
            </div>
        )
    }
}

export default ListView