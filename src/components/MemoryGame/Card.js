import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
// import { ChakraProvider } from '@chakra-ui/react'
import "./Card.css";


// name={orgOrder[pos].name}
// image={orgOrder[pos].image}
// reset={reset}
// wasclicked={wasClicked}
// countUp={countUp}
// shuffle={shuffle}
// endCurrentStage={endCurrentStage}
// setCount={setCount}






export default function (props) {


	const[wasClicked,setwasClicked]=useState(false)
  
function handleClick(){
	if(wasClicked===false){
		setwasClicked(!wasClicked);
		props.incrementScore();

		props.shuffle();
	}

else{
	setwasClicked(!wasClicked);
	props.endCurrentStage();
	props.reset();
}
console.log(wasClicked);
}




  return (
    <div>
<div className="card" key={props.image} onClick={handleClick} >
			<img src={props.image} alt={props.name}></img>
			<br></br>
			<span> 
				<strong>{props.name}</strong>
			</span>
		 </div>

	
     </div>
	 

  );
}
