import React, { Component } from 'react'
import Popup from 'react-popup';
import "./demo.css";
import store from '../../store';
import {clearPopup} from "../../actions/popup_actions";
import {connect} from "react-redux";

/*
    конфигураци всплывающего окна
 */

class MyPopup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.fname,
            desc: this.props.fdesc
        };
    }

    componentWillUnmount(){
        store.dispatch(clearPopup());
    }

    render() {
        return(
            <div id='content'>
                <p> {this.state.name} </p>
                <div id="desc">
                    {this.state.desc}
                </div>
            </div>
        );
    }
}

// const mapStateToProps = function (store) {
//     return{
//         popupId: store.popupState.id
//     }
// };
//
// connect(mapStateToProps)(LMapContainer);

// Popup.onClose(() => {
//     console.log("CLOSING")
// });
//  регистрация кастомного всплывающего окна, чтобы потом его можно было вызывать через Popup.plugins()
Popup.registerPlugin('feature_popup', function (fname, fdesc) {
    this.create({
        title: 'More info',
        className: 'feature_popup',
        content: <MyPopup  fname={fname} fdesc={fdesc} />,
        buttons: {
            center: [{
                text: 'close'
            }]
        }
    });
});

