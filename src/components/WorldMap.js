import React, { Component } from "react";


import {
    ComposableMap,
    ZoomableGroup,
    Geographies,
    Geography,
  } from "react-simple-maps"


class WorldMap extends Component {

    render(){

        return(
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
                  
                  onMouseEnter={this.props.GetInfo}
                  onMouseOut={this.props.HideInfo}
                  
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

        )
    }
}

export default WorldMap;