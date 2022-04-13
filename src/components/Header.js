import React from "react";
import "./header.css"
import logo from './logo.png'

export default class Header extends React.Component{
    render(){
        return(
            <div>
                <img src={logo}></img>
                <h1 className="title">Weather</h1>
            </div>
        )
    }
}