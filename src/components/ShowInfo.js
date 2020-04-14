import React, { Component } from "react";
import NumberFormat from 'react-number-format';


class ShowInfo extends Component{

    render(){
        return(
            <div className="container">
                <div className="show-info">
                    {
                        this.props.country && <p>Country: {this.props.country}</p>
                    }
                    {
                        this.props.capital && <p>Capital: {this.props.capital} </p>
                    }
                    {
                        this.props.region && <p> Region: {this.props.region}</p>
                    }
                    {
                        this.props.currency && <p> Currency: {this.props.currency} </p>
                    }
                    {
                        this.props.population &&  <p>Population: <NumberFormat value={this.props.population} displayType={'text'} thousandSeparator={true}/></p>
                    }
                    {
                        this.props.flag && <img src={this.props.flag} alt="" height="20%" width="20%"/>
                    }
                    {
                        this.props.error && <p> Can't display countryname </p>
                    }
                </div>
            </div>
        )
    }
}

export default ShowInfo;