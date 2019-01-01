import React, {Component} from "react";

class App extends Component{
    constructor(){
        super();
        this.state={};

    }
    componentDidMount(){
        //Use to fetch api for some data
    }

    static getDerivedStateFromProps(props,state){
        //return new, updated state based on the props
    }

    getSnapshotBeforeUpdate(){
        //create backup of way the things are
    }
    //These three life Cyle Methods are deprecated
    // componentWillMount(){

    // }
    // componentWillReceiveProps(nextProps){
    //     //is used to receive props passed by the parent
    //     //this method will be deprecated soon

    //     if(nextProps.whatever !== this.props.whatever){
    //         //Do something important here
    //     }
    // }
    // componentWillUpdate(){

    // }

    shouldComponentUpdate(nextProps, nextState){
        //return true if need to be updated
        //return false if not

    }

    componentWillUnmount(){
        //teardown or cleanup code before component dissappears
        //example: remove event listener
    }
    render(){
        return(
            <div>
                <h1>Hello LifeCyle Method Learning</h1>
            </div>
        );
    }
}

export default App;