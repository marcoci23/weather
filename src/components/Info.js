import React from 'react'
import './info.css'

export default class Info extends React.Component{
    render(){
        return(
            <div className='w-info'>
                {
                    this.props.city && <div>
                        <div className='info'><p className='info-title'>City: </p> {this.props.city}</div>
                        <div className='info'><p className='info-title'>Country: </p> {this.props.country}</div>
                        <div className='info'><p className='info-title'>Temperature: </p>{this.props.temp}<p className='info-title'>°C</p></div>
                        <div className='info'><p className='info-title'>Humidity: </p> {this.props.humidity}</div>
                    </div>
                }
                    <p>{this.props.error}</p>
            </div>
        )
    }
}