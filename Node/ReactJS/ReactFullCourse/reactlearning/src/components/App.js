import React, {Component} from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import MainContent from "./MainContent";

class App extends Component{
    constructor(){
        super();
        this.state = {
            
        }
    }
    render(){
        return (
            <div>
                <NavBar />
                <MainContent />
                <Footer />
            </div>
        );
    }
 
}

export default App;