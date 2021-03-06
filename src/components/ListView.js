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
        this.updateListOfPlaces(query)
    }

    // Check if search term match something in itemPlaces
    updateListOfPlaces = (query) => {
        if (query) {
            const match = new RegExp(escapeRegExp(query), 'i');
            this.props.updateListOfPlaces(this.props.itemPlaces.filter((place) => match.test(place.name)))
        } else {
            this.props.updateListOfPlaces(this.props.itemPlaces);
        }
    }
    
    render() {
        // Sort places by name
        const {filteredPlaces} = this.props
        filteredPlaces ? filteredPlaces.sort(sortBy('name')) : null

        return (
            // Container of the input and list to style
            <div
                className="list-view"
                aria-label="List view with filter input"
            >
                <input
                    aria-label="Filter by name input"
                    type="text"
                    id="filter"
                    placeholder="Filter by name"
                    onChange={event => this.updateSearch(event.target.value)}
                />
                {/* Display list of places according to search term, if no term, default entire list */}
                {this.props.error ?  
                    <div
                        className="list-error"
                        aria-label="Error message"
                    >
                        <p>Error:</p>
                        <p>Please refresh the page or try later</p>
                    </div>
                    :
                    <ul
                        className="filtered-list"
                        aria-label="List of amazing places"
                    >
                        {filteredPlaces.map((place) =>
                            <li
                                aria-label={place.name}
                                className="li-place"
                                key={place.id}
                                onClick={() => this.props.clickOpenInfoWindow(place.id)}
                                tabIndex="0"
                            >
                            {place.name}
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