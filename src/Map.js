import React, { Component } from "react"
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
} from "react-simple-maps"
import './App.css';

import NumberFormat from 'react-number-format';

import ReactTooltip from "react-tooltip"


class Map extends Component {


constructor(props){
  super(props);

  this.state = {
    countryname : undefined,
    capitalname : undefined,
    regionname : undefined,
    currencyname : undefined,
    populationname: undefined,

    country: undefined,
    capital: undefined,
    region: undefined,
    currency: undefined,
    population: undefined,
    flag: undefined,
  }

  this.callApi = this.callApi.bind(this);

}

  componentDidMount() {
    setTimeout(() => {
      ReactTooltip.rebuild()
    }, 50)
  }

  callApi(geography){

    const country = geography.properties.name;

    fetch('https://restcountries.eu/rest/v2/name/'+country)
      .then(response => {
        if(response.ok) return response.json();
        throw new Error('Request failed.');
      })
      .then(data => {
        this.setState({ 
          countryname: "Country: ", country: data[0].name,
          capitalname: "Capital: ", capital: data[0].capital,
          regionname: "Region: ", region: data[0].region,
          currencyname: "Currency: ", currency: data[0].currencies[0].name + " " + data[0].currencies[0].symbol,
          populationname: "Population: ", population: data[0].population
          
      })
        this.setState({ flag: data[0].flag })
      })
      .catch(error => {
        console.log(error);
    });
}

  render() {
    return (

      
      <div >

          <div className="flagdiv">

            <img src={this.state.flag} alt="" height="20%" width="20%"/>

          </div>

          <div className="infodiv"  >

            <p><b>{this.state.countryname}</b> {this.state.country}</p>
            <p><b>{this.state.capitalname}</b> {this.state.capital}</p>
            <p><b>{this.state.regionname}</b> {this.state.region}</p>
            <p><b>{this.state.currencyname}</b> {this.state.currency}</p>
            <p><b>{this.state.populationname}</b> <NumberFormat value={this.state.population} displayType={'text'} thousandSeparator={true}/></p>
            
            
          </div>

        <ComposableMap
          projectionConfig={{
            scale: 205,
          }}
          width={980}
          height={551}
          style={{
            width: "100%",
            height: "auto",
          }}
          >
          <ZoomableGroup center={[5,25]} disablePanning>
          
            <Geographies geography="./world-50m.json">
            
              {(geographies, projection) => geographies.map((geography, i) => geography.id !== "ATA" && (
                <Geography
                  key={i}
                  data-tip={geography.properties.name}
                  geography={geography}
                  projection={projection}
                  onMouseEnter={this.callApi}
                  onMouseDown = {this.testiing}
                  
                  style={{
                    default: {
                      fill: "#ECEFF1",
                      stroke: "#607D8B",
                      strokeWidth: 0.75,
                      outline: "none",
                    },
                    hover: {
                      fill: "grey",
                      stroke: "#607D8B",
                      strokeWidth: 0.75,
                      outline: "none",
                    },
                    pressed: {
                      fill: "red",
                      stroke: "#607D8B",
                      strokeWidth: 0.75,
                      outline: "none",
                    },
                  }}
                />
              ))}
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
        <ReactTooltip />
      </div>
      
    )
  }
}

export default Map