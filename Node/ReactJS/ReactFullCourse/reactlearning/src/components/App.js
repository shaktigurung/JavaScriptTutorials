import React, {Component} from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import MainContent from "./MainContent";

class App extends Component{
    constructor(){
        super();
        this.state = {
            answer: "Yes"
        }
    }
    render(){
        return (
            <div>
                <p>This is test class</p>
                <NavBar />
                <MainContent />
                <Footer />
            </div>
        );
    }
 
}

export default App;