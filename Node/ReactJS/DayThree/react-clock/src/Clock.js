import React, {Component} from "react";
import "./Clock.css";

class Clock extends Component{

    //state = {seconds: 0, minutes: 0, hours: 0};
    state = {
        date: this.props.date
    }

    //Using Constructor
    // constructor(props){
    //     super(props);
    //     const seconds = props.date.getSeconds();
    //     const minutes = props.date.getMinutes();
    //     const hours = props.date.getHours();
    //     //this.state = {seconds, minutes, hours};
    // }
    
    componentDidMount(){
        // setInterval(
        //     () => {
        //         this.setState({
        //             date: new Date()
        //           });
        //     },1000);

        setInterval(
            ()=>{
                this.setState((state)=>{
                    state.date.setSeconds(state.date.getSeconds() + 1);
                    return {date: state.date};
                });
            },1000
        )
    }
    componentDidUpdate(){
        
    }
    componentWillUnmount(){

    }
    render(){
        const seconds = this.state.date.getSeconds();
        const minutes = this.state.date.getMinutes();
        const hours = this.state.date.getHours();
    return (
        <div className="container">
            <h3 className="label">{this.state.timezone}</h3>
            <div className="clock-face" style={{ backgroundImage: `url(/${this.props.icon})` }}>
                <div className="clock">
                    <div className="hours-container">
                        <div className="hours" style={{ transform: `rotateZ(${(hours * 30) + (minutes / 2)}deg)`}}></div>
                    </div>
                    <div className="minutes-container">
                        <div className="minutes" style={{ transform: `rotateZ(${(minutes * 6)}deg)`}}></div>
                    </div>
                    <div className="seconds-container">
                        <div className="seconds" style={{ transform: `rotateZ(${(seconds * 6)}deg)`}}></div>
                    </div>
                </div>
            </div>
        </div>
    );
    }
}

export default Clock;