import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Form from "./components/Form"
import Info from "./components/Info"
import React from 'react';

const API_KEY = "b9b52b7cae0f713be77573ff04ebe52b"

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Form />
        <Info />
      </div>
    );
  }
}

