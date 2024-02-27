import React,{useState} from  "react";
import Board from "./Board";
import { calculateWinner } from "./Utils";
const style = {
    borderRadius: "10px",
    width: "250px",
    height: "250px",
    margin: "0 auto",
    display: "grid",
    gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)",
    boxShadow: "#3c8be0 5px 5px 3px 0px",
  };

function Game(){


const[board,setBoard]=useState(Array(9).fill(null));

const[xTurn,setXTurn]=useState(true);

const winner=calculateWinner(board);


 //everytime checks if winner is present or clicked on marked square then just returns
  //otherwise update board array's clicked index value with 'X' or 'O'
const handleClick=(i)=>{
    const tmpBoard=[...board];//[...array] creates a shallow copy of the array. Each element of the original array becomes a separate element in the new array.


    if(!!winner||!!tmpBoard[i])return;//The two ! operators are used for double negation,and the simpler winner || tmpBoard[i] is perfectly valid and achieves the same functionality without the potential ,

    tmpBoard[i]=xTurn?"X":"O";
    setBoard(tmpBoard);
    setXTurn(!xTurn);
};
const resetBoard = () => (
    <button onClick={() => setBoard(Array(9).fill(null))}>Start Game</button>
  );

    return (
     
        <div style={style.container}>
            <p style={style.info}>{winner?"Winner"+winner:"Next Player:"+(xTurn?"X":"O") }</p>

            <Board squares={board} handleClick={handleClick}/>

            <div>{resetBoard()}</div>

        </div>
        
        
    )
}

export default Game;