import React, { Component } from "react";
import {Routes, Route} from "react-router-dom";

// import Test from "./pages/test"
import MakePlayer from "./pages/MakePlayer"

export default class App extends Component {
  render() {
    return (
      <Routes>      
        {/* <Route path='/' element={<Main/>}/> */}
        <Route path='/makePlayer' element={<MakePlayer/>}/>
        {/* <Route path='/test' element={<Test/>}/> */}
      </Routes>
    )
  }
}