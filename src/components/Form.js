import React from 'react'
import './form.css'

export default class Form extends React.Component{
    render(){
        return(
            <form onSubmit={this.props.weatherMethod}
            className='form'>
                <input className='form-control' type='text' name="city"></input>
                <button 
                className='btn btn-dark'

                >Search</button>
            </form>
        )
    }
}