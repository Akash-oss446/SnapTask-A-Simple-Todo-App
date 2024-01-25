import React from "react";
const todolist=(props)=>{
    
    return(
    <div className="todo_style">
     <br></br>
     <li> {props.text}  <b className="fa fa-times" aria-hidden="true" onClick={()=>{
        props.onSelect(props.id);
    }}>Remove</b></li>
    </div>
    );
}
export default todolist;