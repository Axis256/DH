import React, { Component } from 'react';
import './TypeChooser.css'
import store from '../../store'
import {setCategories} from "../../actions/category_action";
import {connect} from 'react-redux';

/*
кнопка при нажатии разварачивается в меня с выбором типа объектана карте
 */


class TypeChooser extends Component {
    constructor(props){
        super(props);
        let arr = [];
        this.props.categories.map((val) => {
            arr.push({name: val, active: true})
        });

        this.state = {
            // activeCategories: this.props.categories,
            allCategories: arr,
            expand: false
        };
        this.onToggle = this.onToggle.bind(this);
        this.onCategoryClick = this.onCategoryClick.bind(this);
    }


    onCategoryClick(e){
        this.state.allCategories[e.target.id].active = !this.state.allCategories[e.target.id].active; //переделать через setState
        let activeCat = [];
        this.state.allCategories.map((value) => {
            if(value.active)
                activeCat.push(value.name);
        });
        store.dispatch(setCategories(activeCat));
    }

    onToggle(){
        this.setState({expand: !this.state.expand})
    }

    render() {
        const green = { background: 'rgba(130, 255, 152, 0.82)' };
        const red = { background: 'rgba(255, 65, 72, 0.82)' };

        const catList = this.state.allCategories.map((item, index) =>
            <li style={item.active ? green : red} onClick={this.onCategoryClick} key={index} id={index} className='tag'>
                {item.name}
            </li>
        );

        return (
            <div>
                <div>
                    <p>Category list</p>
                    <label class="switch">
                        <input type="checkbox" onClick={this.onToggle}/>
                        <span class="slider"></span>
                    </label>
                </div>
                {this.state.expand &&
                <div id='tags'>
                    <ul>
                        {catList}
                    </ul>
                </div>
                }
            </div>
        );
    }
}

const mapStateToProps = function (store) {
    return{
        categories: store.categoryState.categories
    }
};

export default connect(mapStateToProps)(TypeChooser);
