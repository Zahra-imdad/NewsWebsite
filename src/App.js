import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import React, { Component } from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


export default class App extends Component {
  apiKey=process.env.REACT_NEWS_APP_API
  state = {
    progress:0
  }
  
  setProgress=(progress)=>{
    this.setState({progress: progress})
  }
  
  render() {
    return (
      <div className='bg-dark'>
        
       
        
        <BrowserRouter>
        <NavBar />
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        height={3}
      />
        <Routes>
        <Route path="/" element={<News  setProgress={this.setProgress} apiKey={this.apiKey}  key="general"  country="in" category="general" />}></Route>
          <Route path="/Science" element={<News  setProgress={this.setProgress }key="science"  country="in" category="science" />}></Route>
          <Route path="/Business" element={<News  setProgress={this.setProgress} apiKey={this.apiKey}  key="business" country="in" category="business" />}></Route>
          <Route path="/Entertainment" element={<News  setProgress={this.setProgress} apiKey={this.apiKey}  key="entertainment" country="in" category="entertainment" />}></Route>
          <Route path="/General" element={<News  setProgress={this.setProgress} apiKey={this.apiKey}  key="general" country="in" category="general" />}></Route>
          <Route path="/Health" element={<News  setProgress={this.setProgress} apiKey={this.apiKey}  key="health" country="in" category="health" />}></Route>
          </Routes>
         
          <Footer />
        </BrowserRouter>

      </div>
    )
  }
}
