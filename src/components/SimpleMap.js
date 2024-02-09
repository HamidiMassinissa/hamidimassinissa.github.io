import React, { Component } from 'react';
//import GoogleMapReact from 'google-map-react';
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'

import 'leaflet/dist/leaflet.css'

// from https://stackoverflow.com/a/69983307/3441514
import marker from '../assets/marker-icon-2x.png';
import { Icon } from 'leaflet'
const myIcon = new Icon({
 iconUrl: marker,
 iconSize: [25,41]
})


class SimpleMap extends Component { 
  render() {
    return (
    	<MapContainer style={{ height: "450px", width: "100%" }} center={[48.625740, 2.440130]} zoom={13} scrollWheelZoom={true}>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<Marker position={[48.625740, 2.440130]} icon={myIcon}>
					<Popup>
						SITE IBGBI <br/>
						Bâtiment IBGBI – 2ème étage<br/>
						23, Boulevard de France<br/>
						91034 – EVRY<br/>
						Contact<br/>
						Mme Murielle Bourgeois<br/>
						Tél : +33 (0)1 64 85 35 07<br/>
					</Popup>
				</Marker>
			</MapContainer>
    );
  }
}
 
export default SimpleMap;
