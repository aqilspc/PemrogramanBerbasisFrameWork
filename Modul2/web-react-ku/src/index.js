import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import logo from './logo.svg';
import './App.css';
const Hello = () => {
  return [
  <div className="App">,
  <header className="App-header">
      <p align="center">Hallo Dunia</p>
      <img src={logo} className="App-logo" alt="logo" />
      <marquee behavior="scroll" direction="up" scrollamount="7">Bangun Tidur</marquee>
      <marquee behavior="scroll" direction="right" scrollamount="12">Kuliah</marquee>
      <marquee behavior="scroll" direction="left" scrollamount="10">Ngoding & learning Working</marquee>
      <marquee behavior="scroll" direction="right" >Isoman : istirahat solat makan</marquee>
      </header>
  </div>
  ]
}
ReactDOM.render(<Hello />, document.getElementById('root'));
reportWebVitals();