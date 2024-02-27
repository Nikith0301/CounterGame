import React from 'react'
import Square from "./Square";

// const style = {
//   borderRadius: "10px",
//   width: "300px",
//   height: "300px",
//   margin: "0 auto",
//   display: "grid",
//   backgroundColor:"red",
//   gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)",
//   boxShadow: "#3c8be0 5px 5px 3px 0px",
// };
const style = {
	border: "4px solid darkblue",
	borderRadius: "10px",
	width: "250px",
	height: "250px",
	margin: "0 auto",
	display: "grid",
	gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)",
};
export default function Board(props) {
  return (
    <div style={style}>
    {props.squares.map((square,index)=>(
        <Square key={index} value={square} onClick={()=>props.handleClick(index)}/>
    ))}</div>
  );
}
