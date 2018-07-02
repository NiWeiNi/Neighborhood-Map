import React, { Component } from 'react';

class ListView extends Component {
    render() {
        return (
            <div className="list-view">
                <input
                    type="text"
                    id="filter"
                    placeholder="Filter by name"
                />
            
            </div>
        )
    }
}

export default ListView;