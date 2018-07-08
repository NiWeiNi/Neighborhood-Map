import React, { Component } from 'react';

// Dependecies for search
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

class ListView extends Component {

    state = {
        query: ''
    }

    // Delete spaces from query and set state with that query
    updateSearch = (query) => {
        this.setState({
            query: query.trim()
        })
        this.updatePlaces(this.state.query)
    }

    // Check if search term match something in itemPlaces
    updatePlaces = (query) => {
        if (query) {
            const match = new RegExp(escapeRegExp(query), 'i');
            this.props.updateListOfPlaces(this.props.itemPlaces.filter((place) => match.test(place.venue.name)))
        } else {
            this.props.updateListOfPlaces(this.props.itemPlaces);
        }
    }
    
    render() {
        // Sort places by name
        const {filteredPlaces} = this.props
        filteredPlaces.sort(sortBy('venue.name'))

        return (
            // Container of the input and list to style
            <div className="list-view">
                <input
                    type="text"
                    id="filter"
                    placeholder="Filter by name"
                    onChange={event => this.updateSearch(event.target.value)}
                />
                {/* Display list of places according to search term, if no term, default entire list */}
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
                {/* List footer */}
                <p className="acknowledgment">Powered by React · Data provided by foursquare</p>
            </div>
        )
    }
}

export default ListView