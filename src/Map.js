import React, { Component } from "react"

import ShowInfo from './components/ShowInfo'
import WorldMap from './components/WorldMap'

import axios from 'axios';


class Map extends Component {

 state = {

    country: undefined,
    capital: undefined,
    region: undefined,
    currency: undefined,
    population: undefined,
    flag: undefined,
    error: undefined,
    condition: undefined,
    hover: undefined
  }

  handleMouseIn() {
    this.setState({ hover: true })
  }
  
  callApi(geography){

    const country = geography.properties.name;
    console.log(country);

    axios.get('https://restcountries.eu/rest/v2/name/' + country)
        .then(response => {
            this.setState({
              country: response.data[0].name,
              capital: response.data[0].capital,
              region: response.data[0].region,
              currency: response.data[0].currencies[0].name + " " + response.data[0].currencies[0].symbol,
              population: response.data[0].population,
              flag: response.data[0].flag,
              hover: true,
            })
        })
        .catch(error => {
          this.setState({
            error: "Can't display countryname",
            hover: false,
            
          })
      });  
    }

    hideInfo(){
      console.log(this.state.hover)
      this.setState({
        hover: false,
        error: false
      })
    }

  render() {

    const showHover = this.state.hover;
    const showError = this.state.error;

    console.log(this.state.hover)

    return (
      <div className = "main-container">
      {showHover ? (
      
      <div className = "show-div">
      <ShowInfo 
      country = {this.state.country}
      capital = {this.state.capital}
      region = {this.state.region}
      currency = {this.state.currency}
      population = {this.state.population}
      flag = {this.state.flag}
      />     
      </div>
      ) : (
        <div className = "hidden-div">
          
        </div>
      )}

      {showError ? (
        <div className = "show-div">
       <ShowInfo error={this.state.error}/>
       </div>
      
      ) : (
        console.log("hi there")
        
      )}    

      <div onMouseEnter={this.handleMouseIn.bind(this)}>
      <WorldMap GetInfo={this.callApi.bind(this)} HideInfo={this.hideInfo.bind(this)}/>
      </div>
      </div>
    )
  } 
}

export default Map