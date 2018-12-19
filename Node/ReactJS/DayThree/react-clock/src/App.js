import React, {Component} from 'react';
import Clock from "./Clock";

class App extends Component{
    state = {latitude: null, errorMessage: "", value: 1}; //Syntatical sugar

    constructor(props){
        super(props); // Helps to call parent constructor which in this case is  "Component"
       // this.state = {latitude: null, errorMessage: ""};

        window.navigator.geolocation.getCurrentPosition(
            position => {this.setState({latitude: position.coords.latitude})},
            error => {this.setState({errorMessage: error.message })}
        );

        setInterval(()=>{
            this.setState((state, props) =>{
                return {value: state.value + 1};
            });
        }, 1000);

    }

    isItWarm(){
        const {latitude} = this.state;
        
        if(latitude){
            const month = new Date().getMonth();
            //console.log(month);
            if (
                ( month >=4 && month <=9 && latitude >0)
                ||
                ((month >= 9 || month<= 4) && latitude <0)
                ||
                (latitude ===0)
            ){
                return true;
            }

        }
        return false;
    }

    getClockIcon(){
        if(this.isItWarm())
        {
            return "sun.svg";
        }
        return "snowflake.svg";
    }

    render(){
        const {latitude, errorMessage, value} = this.state;
        return (
            <div> 
                 {value}
                 {this.isItWarm()}
                
                 {errorMessage || <Clock 
                    icon={latitude !== null ? this.getClockIcon() : null}
                    timezone={"Sydney/Australia"} 
                    date={new Date()} 
                 /> }
            </div>
        );
    }
}

export default App;
