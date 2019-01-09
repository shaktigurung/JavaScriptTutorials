import React, {Component} from "react";

class EntryForm extends Component{
    state={entry:""};

    onTextAreaChange= (event)=>{
        this.setState({entry: event.target.value});
    }

    onFormSubmit =(event)=>{
        event.preventDefault();
        const {entry} = this.state;
        const {onEntryFormSubmit, category} = this.props;
        onEntryFormSubmit({category, entry});
    }
    render(){
        const {entry} = this.state;
        return(
            <form onSubmit = {this.onFormSubmit}>
                <textarea value={entry} onChange = {this.onTextAreaChange}></textarea>
                <div>
                    <input type="submit" value="Create New Entry"/>
                </div>
            </form>
        );
    }
}
export default EntryForm;