import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Form from "./components/Form"
import Info from "./components/Info"
import React from 'react';

const API_KEY = "b9b52b7cae0f713be77573ff04ebe52b"

export default class App extends React.Component {

  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    error: undefined
  }

  gettingWeather = async (e) => {
    e.preventDefault()
    const  city = e.target.elements.city.value

    if(city){
      const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
      const data = await api_url.json()
    this.setState({
      temp: data.main.temp,
      city: data.name,
      country: data.sys.country,
      error: ""
    });
  } else {
    this.setState({
      temp: undefined,
      city: undefined,
      country: undefined,
      error: "Error"
    });

  }
}
  render() {
    return (
      <div className="App">
        <Header />
        <Form weatherMethod={this.gettingWeather}/>
        <Info 
        temp ={this.state.temp}
        city ={this.state.city}
        country ={this.state.country}
        error={this.state.error} />
      </div>
    );
  }
}

