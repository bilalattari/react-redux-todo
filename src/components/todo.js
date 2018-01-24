import React , {Component} from 'react'
import {connect} from 'react-redux';
import {addTodo , delTodo , delAllTodo , editTodo} from '../store/action/action'
import TodoList from './todoList'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import TextField from 'material-ui/TextField';
import {orange500, blue500} from 'material-ui/styles/colors';

class Todo extends Component {
  constructor(props){
    super(props)
    this.state = {
      inputValue : ''
    }
  }
  _addTodo(){
    const text = this.state.inputValue
    if(text === ''){
      alert('Please add something')
    }else{
      this.props.setTodo(text)
      this.state.inputValue = ''
    }
}

  deletetodo= (index) =>{
    this.props.delTodo(index)
  }

  _delAllTodo = () => {
    this.props.delAllTodo()
  }

  _editTodo = (tod ,index) => {
    console.log(tod ,index)
    const newTodo = prompt('NEW TEXT :' , tod)
    console.log(newTodo)
    this.props.editTodo(index , newTodo)
  }
  render(){
  const styles = {
  floatingLabelStyle: {
    color: orange500,
  },
  floatingLabelFocusStyle: {
    color: blue500,
  },
  addStyle : {
    width : '80%',
    margin :  '0 auto',
          },
};
    return(
      <div style={styles.addStyle} >
    <div className="mx-auto">
      <TextField
      floatingLabelText="Add Todo"
      onChange = {(event)=> {this.setState({inputValue : event.target.value})}}
      value = {this.state.inputValue}
      floatingLabelStyle={styles.floatingLabelStyle}
      floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
    />
      <FloatingActionButton mini={true} >
            <ContentAdd onClick = {this._addTodo.bind(this)}/>
      </FloatingActionButton>
      <TodoList deletetodo= {(i)=> this.deletetodo(i)} editTodo= {(tod ,index)=> this._editTodo(tod , index)} />
      <button type="button" className="btn btn-default" onClick = {this._delAllTodo.bind(this)}>Del All</button>
    </div>
    </div>
    )
  }
}

  function mapDispatchToProp(dispatch ){
    return({
        setTodo : (text , index)=> {dispatch(addTodo(text))},
        delTodo : (index) => {dispatch(delTodo(index))},
        delAllTodo : ()=>{dispatch(delAllTodo())},
        editTodo : (index , newTodo) => {dispatch(editTodo(index , newTodo))}
    })
}
function mapStateToProp(state){
    return({
        index : state.todo
    })
}

export default connect(mapStateToProp, mapDispatchToProp )(Todo);
