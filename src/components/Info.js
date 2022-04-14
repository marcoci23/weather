import React from 'react'

export default class Info extends React.Component{
    render(){
        return(
            <div>
                {
                    this.props.city && <div>
                        <p>City: {this.props.city}</p>
                        <p>Country: {this.props.country}</p>
                        <p>Temperature: {this.props.temp}</p>
                    </div>
                }
                    <p>{this.props.error}</p>
            </div>
        )
    }
}