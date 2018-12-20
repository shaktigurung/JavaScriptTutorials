import React, { Component } from 'react';

class ColourSelector extends Component {
 
    // constructor(props){
    //     super(props);
    //     this.onInputChange = this.onInputChange.bind(this);
    // }

    // onInputChange(event){
    //    this.setState({hex: event.target.value});
    // }
    
    onInputChange = (event)=>{
        const {onColourSelectorChange} = this.props;
        onColourSelectorChange(event.target.value);
    }

    // componentDidUpdate(){
    //     console.log(this.state);
    // }
    render(){
        const {hex} = this.props;
        return(
            <div>
                <input 
                    type="color" 
                    value ={hex} 
                    //onChange = {this.onInputChange.bind(this)} 
                    //Or we can used this way
                    //onChange = {event => this.onInputChange(event)} 
                    onChange = {this.onInputChange} 
                    />
            </div>
        );
    }
    // static defaultProps = {
    //     hex: "#ffff00"
    // };
}

ColourSelector.defaultProps = {
    hex: "#ffff00"
};

export default ColourSelector;