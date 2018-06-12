import React from 'react'
import { Map, TileLayer, GeoJSON } from 'react-leaflet'
import GeoJsonLayer from './GeoJsonLayer'

const mapConfig = {
    //место, которое будет центром карты при загрузке страницы
    center: [59.935322463178544, 30.303554534912113],
    zoom: 13,
    maxzoom: 18,
    minzoom: 10,
    with_access: "https://api.tiles.mapbox.com/v4/mapbox.dark/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoidHJpbmlzdHIiLCJhIjoiY2poZHY2aGN2MHFmcDM2cGVvd3ZuazVhcyJ9.Nimhd1TzX6pi3kr8zsIXKg"
};
/*
компонент-представление для работы с картой
 */

let LMap = function (props) {
    return (
        //TODO подумать есть ли смысл задавать границы или же просто обрезать карту, чтобы там был питер и окресности
        <div id='map_box'>
            {/*сама карта*/}

            <Map center={mapConfig.center} zoom={mapConfig.zoom} maxZoom={mapConfig.maxzoom} minZoom={mapConfig.minzoom}>
                    {/*тайлы для карты*/}
                    <TileLayer
                        attribution="Map data &amp; copy <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors, <a href=&quothttps://creativecommons.org/licenses/by-sa/2.0/&quot;>CC-BY-SA</a>, Imagery © <a href=&quot;https://www.mapbox.com/&quot;>Mapbox</a>"
                        url={mapConfig.with_access}
                    />
                    {/*слой для работы с геоджсоном*/}
                    <GeoJsonLayer />
            </Map>
        </div>
    )
};

export default LMap;

