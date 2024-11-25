//import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react';
import Navbar from "./components/Navbar.js"
import News from "./components/News.js"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


export default class App extends Component {
  render() {
    return (
      <div>
    <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path="/" element={<><News key=" general"  pageSize={6} country='us' category='general'/></>}/>
      <Route path="/home" element={<><News key=" general"  pageSize={6} country='us' category='general'/></>}/>
          <Route path="/general" element={<News key=" general"  pageSize={6} country='us' category='general'/>}/>
          <Route  path="/Business" element={ <News key=" Business"  pageSize={6} country='us' category='Business'/>}/>
          <Route path="/Entertainment" element={ <News key=" Entertainment"  pageSize={6} country='us' category='Entertainment'/>}/>
          <Route  path="/Health" element={ <News key=" Health"  pageSize={6} country='us' category='Health'/>}/>
          <Route path="/Science" element={ <News  key=" Science" pageSize={6} country='us' category='Science'/>}/>
          <Route  path="/Sports" element={ <News  key=" Sports" pageSize={6} country='us' category='Sports'/>}/>
          <Route path="/Technology" element={ <News key="Technology "  pageSize={6} country='us' category='Technology'/>}/>
          </Routes>
          </BrowserRouter>

      </div>
    )
  }
}


