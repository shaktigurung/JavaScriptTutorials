import React from "react";
import ReactDom from "react-dom";
import MyInfo from "./MyInfo";
import Footer from "./Footer";
import Header from "./Header";

function App(){
    return (
            <div>
                <Header />
                <MyInfo />
                <Footer />
            </div>
    );
}

export default App;