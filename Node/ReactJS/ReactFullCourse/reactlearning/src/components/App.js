import React from "react";
import ReactDom from "react-dom";
import Footer from "./Footer";
import NavBar from "./NavBar";
import MainContent from "./MainContent";

function App(){
    return (
            <div>
                <NavBar />
                <MainContent />
                <Footer />
            </div>
    );
}

export default App;