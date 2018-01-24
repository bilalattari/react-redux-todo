import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {incrementOfCounter} from '../store/action/action';
import {decrementOfCounter} from '../store/action/action';
class Counter extends Component {

   
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
                <p> Here is my redux counter :  {this.props.counter}  </p>
                 <button onClick={this._increment.bind(this)}>Inc</button>
                 <button onClick={this._decrement.bind(this)}>Decr</button>
                <Link to='/about'>Go to About</Link>
            </div>
        )
    }
}

function mapStateToProp(state){
    console.log(state)
    return({
        counter : state.counter.counter
    })
}
function mapDispatchToProp(dispatch){
    return({
        increment : ()=>{dispatch(incrementOfCounter())},
        decrement : ()=>{dispatch(decrementOfCounter())},
    })
}

export default connect(mapStateToProp,mapDispatchToProp)(Counter);
