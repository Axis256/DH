import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import About from './About'
import MapPage from './map/MapPage'
import Popup from 'react-popup'
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header row">
          <h1>DH project</h1>
            <div className='buttons row'>
                <Link className="lnk" to="/">
                    <button className="btn">About</button>
                </Link>
                <Link className="lnk" to="map">
                    <button  className="btn">Map</button>
                </Link>
            </div>
        </div>
          {/*Popup дожен быть указан один раз в любом месте, чтобы потом его использовать на любой странице  */}
          <Popup/>
          <div id='child'>
                      <Switch>
                          <Route exact path="/" component={About} />
                          <Route path="/map" component={MapPage}/>
                      </Switch>
          </div>
      </div>
    );
  }
}

export default App;
