import React from 'react'
import GoogleMapReact from 'google-map-react'

const ISS_URL = "http://api.open-notify.org/iss-now.json"

class Map extends React.Component{
    state = {
        center: {
            lat: 0,
            lng: 0
        },
        zoom: 1
    }

    componentDidMount(){
        // this.getCoordinates()
        fetch(ISS_URL)
            .then(res => res.json())
            .then(data => this.setState({
                center: {
                    lat: data.iss_position.latitude,
                    lng: data.iss_position.longitude
                }
            }))
    }

    // getCoordinates = () => {
    //     fetch(ISS_URL)
    //         .then(res => res.json())
    //         .then(data => console.log(data))
    // }

    render(){
        console.log("LAT:", this.state.center.lat)
        console.log("LNG:", this.state.center.lng)
        return(
            <div>
                MAP PLACEHOLDER
            </div>
        )
    }
}

export default Map