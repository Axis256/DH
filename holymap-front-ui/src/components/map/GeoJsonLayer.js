import React, { Component } from 'react'
import Popup, {close} from 'react-popup';
import {GeoJSON} from 'react-leaflet';
import {connect} from "react-redux";
import store from "../../store"
import {setContent} from "../../actions/popup_actions";
// unused import - очень хитрый обман. На самом деле MyPopup используется внутри Popup
// и если убрать импорт - всё посыпется
import MyPopup from '../dialog/MyPopup'
import geoJsonData, {Hermitage, NewHolland} from "../../data/GeoJsonExample";

/*
компонент-контейнер для работы с картой
 */

class GeoJsonLayer extends Component {
    constructor(props){
        super(props);
        this.state = {
            openedPopup: false
        };
        this.onEachFeature = this.onEachFeature.bind(this);
        this.filterData = this.filterData.bind(this);
    }

    //  обработка клика по объекту на карте
    // через свойства эвента в всплывающее окно передаёются информация о объекте
    onEachFeature(feature, layer){
        layer.on('click', (e) =>{
            const feature = e.target.feature;
            if(this.props.popupId === -1) {
                store.dispatch(setContent(feature.id));
                Popup.plugins().feature_popup(feature.properties.name, feature.properties.desc);
            } else  if(this.props.popupId !== feature.id ){
                Popup.close();
                store.dispatch(setContent(feature.id));
                Popup.plugins().feature_popup(feature.properties.name, feature.properties.desc);
            }
        });
        layer.setStyle({
            // стиль выделения объектов на карте, надо перенести в отдельный файл
            stroke: true,
            strokeWidth: 1,
            color: '#fdaee9' //(feature.properties.color ? feature.properties.color : "salmon")
        });
    }

    filterData(){
        let data = [];
        geoJsonData.features.map((feature) => {
            if(this.props.categories.indexOf(feature.properties.category ) !== -1)
                data.push(feature);
        });
        // const newGeoJsonData = {
        //     "type": "FeatureCollection",
        //     "features": data
        // };
        return {
            "type": "FeatureCollection",
            "features": data
        };
    }


    render() {
        return (
            <GeoJSON onEachFeature={this.onEachFeature}
                     key={Math.random()}
                     data={this.filterData()}
            />
        )
    }
}

const mapStateToProps = function (store) {
    return{
        categories: store.categoryState.categories
    }
};

export default connect(mapStateToProps)(GeoJsonLayer);
