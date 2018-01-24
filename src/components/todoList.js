import React , {Component} from 'react'
import {List, ListItem} from 'material-ui/List';
import {connect} from 'react-redux'

 
class TodoList extends Component {
    constructor(props){
        super(props)
    }
    render(){ 
      const props = this.props 
    return(
        <ul className="list-group">
             {
          props.todoList.map((todos , index) => {
              console.log(todos)
              return( 
                 <li className="list-group-item" key = {index} style = {{fontSize : 18 ,paddingRight : 12}}>{todos}
                      <button type="button" class="btn btn-primary btn-sm m-2"
                      style = {{float : 'right' , marginRight : '5px'}}
                       onClick = {(todo ,  ind) => props.editTodo(todos , index)}
                      >Edit</button>
                       <button type="button" class="btn btn-primary btn-sm m-2"
                       style = {{float : 'right' ,marginRight : '5px'}}
                       onClick = {(ind) => props.deletetodo(index)}
                      >Del</button>
                </li>
               )
            } 
          )
           }
           </ul>
    )
}
}
    
function mapStateToProp(state){
    console.log(state.todo)
    return({
        todoList : state.todo
    })
}

export default connect(mapStateToProp)(TodoList)