import React, { Component } from 'react';

class ColourSelector extends Component {
    render(){
        return(
            <div>
            <input type="color" defaultValue ="#fff"/>
            </div>
        );
    }
}

export default ColourSelector;