import React, { Component } from "react";
import {Routes, Route} from "react-router-dom";

// import Test from "./pages/test"
import MakePlayer from "./pages/MakePlayer"
import Login from "./pages/Login"
import Quiz from "./pages/Quiz"

export default class App extends Component {
  render() {
    return (
      <Routes>      
        {/* <Route path='/' element={<Main/>}/> */}
        <Route path='/' element={<Login/>}/>
        <Route path='/makePlayer' element={<MakePlayer/>}/>        
        <Route path='/quiz' element={<Quiz/>}/>
      </Routes>
    )
  }
}