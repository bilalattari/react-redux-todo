import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {changeUserName} from '../store/action/action';
import {incrementOfCounter} from '../store/action/action';
import {decrementOfCounter} from '../store/action/action';

class Home extends Component {

    _changeData(){
        console.log('event called');
        this.props.changeUserName();
    }
    _increment(){
 this.props.increment()
}
    _decrement(){
 this.props.decrement()
}
    render() {
        return (
            <div>
                <h1>Hello World {this.props.userName}</h1>
                <button onClick={this._changeData.bind(this)}>Change</button>
                <hr/>
                <Link to='/about'>Go to About</Link>
                <hr />
                <Link to='/counter'>Counter App</Link>
                <hr />
                <Link to='/todo'>Todo App</Link>
                
            </div>
        )
    }
}

function mapStateToProp(state){
    console.log(state)
    return({
        userName: state.userName.userName,
    })
}
function mapDispatchToProp(dispatch){
    return({
        changeUserName: ()=>{dispatch(changeUserName())},
    })
}

export default connect(mapStateToProp,mapDispatchToProp)(Home);

