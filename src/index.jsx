import React from "react";
import ReactDOM from"react-dom/client";
import Header from "./Header";
import Footer from "./Footer";

import "./assets/index.css";

class App extends React.Component{
    render(){
        return(
            <div>
                <Header></Header>
                
                <Footer></Footer>
            </div> 
        )
    }
}
var root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App />);