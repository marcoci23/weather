
import './App.css';
import Header from './Header';
import Form from "./Form"
import Info from "./Info"
import React from 'react';


const API_KEY = "b9b52b7cae0f713be77573ff04ebe52b"

export default class App extends React.Component {

  state = {
    temp: "",
    city: "",
    country: "",
    humidity: "",
    error: ""
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
      humidity: data.main.humidity,
      error: ""
    });
  } else {
    this.setState({
      temp: "",
      city: "",
      country: "",
      humidity: "",
      error: "Error"
    });

  }
}
  render() {
    return (
      <div className="App">
        <Header />
        <Form 
        weatherMethod={this.gettingWeather}/>
        <div className='weather-info'>
        <Info 
        temp ={this.state.temp}
        city ={this.state.city}
        country ={this.state.country}
        humidity = {this.state.humidity}
        error={this.state.error} />
        </div>
      </div>
    );
  }
}

