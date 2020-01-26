import React from 'react'
import GoogleMapReact from 'google-map-react'

class Map extends React.Component{
    state = {
        center: {
            lat: 0,
            lng: 0
        },
        zoom: 1
    }
    render(){
        return(
            <div>
                MAP PLACEHOLDER
            </div>
        )
    }
}

export default Map