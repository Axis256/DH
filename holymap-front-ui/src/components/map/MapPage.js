import React, { Component } from 'react';
import './MapPage.css';
import 'leaflet/dist/leaflet.css'
import LMap from "./LMap";
import TypeChooser from "../controls/TypeChooser";
/*
    основная станица, будет карты и всякие кнопочки-фильтры для работы с ней
 */


class MapPage extends Component {

    render() {
        return (
            <div id='main'>
                <div id="map">
                    <LMap/>
                </div>
                <div id='controls'>
                    {/*тут будут кнопки*/}
                    <TypeChooser/>
                </div>
            </div>
        );
    }
}

export default MapPage;
