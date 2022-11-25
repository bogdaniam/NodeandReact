import './App.css';
import Home from "./pages/home";
import { BrowserRouter } from "react-router-dom";
import React, { Component } from "react";

class App extends Component {


  render() {
      return (

          <BrowserRouter>
           
              <div  class="mainapp" >
                  
                  
                 
                  
                  <div><Home /></div>
                  
                  
              </div>
              
          </BrowserRouter>

      );
  }
  }
  export default App;
