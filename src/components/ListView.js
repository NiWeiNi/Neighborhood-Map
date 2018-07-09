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
            this.props.updateListOfPlaces(this.props.itemPlaces.filter((place) => match.test(place.venue.name)))
        } else {
            this.props.updateListOfPlaces(this.props.itemPlaces);
        }
    }
    
    render() {
        // Sort places by name
        const {filteredPlaces} = this.props
        filteredPlaces ? filteredPlaces.sort(sortBy('venue.name')) : null

        return (
            // Container of the input and list to style
            <div className="list-view">
                <input
                    aria-label="Filter by name input"
                    type="text"
                    id="filter"
                    placeholder="Filter by name"
                    onChange={event => this.updateSearch(event.target.value)}
                />
                {/* Display list of places according to search term, if no term, default entire list */}
                {this.props.filteredPlaces.length > 0 ?  
                    <ul className="filtered-list">
                        {this.props.filteredPlaces.map((place) =>
                            <li
                                aria-label={place.venue.name}
                                className="li-place"
                                key={place.venue.id}
                                onClick={() => this.props.clickOpenInfoWindow(place.venue.id)}
                                tabIndex="0"
                            >
                            {place.venue.name}
                            </li>
                        )}
                    </ul>
                    :
                    <div className="list-error">
                        <p>In progress...</p>
                        <p>Working to solve the error, our sincerest apologies. Please refresh the page or try later</p>
                    </div>
                }
                {/* List footer */}
                <p className="acknowledgment">Powered by React · Data provided by foursquare</p>
            </div>
        )
    }
}

export default ListView