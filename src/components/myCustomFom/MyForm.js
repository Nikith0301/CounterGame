import {useEffect,useState,useRef} from "react"

export default function MyForm(props){//#. here props is of type Object
  
  //1.Object .keys returns array
  console.log(Object.keys(props));// ['username', 'password', 'loginButton']

//#. how map works
                  // const numbers = [1, 2, 3, 4];
                  // const squares = numbers.map(number => number * number); // squares = [1, 4, 9, 16]
                  //   map Functionality:
                  // Takes an array and a callback function as arguments.
                  // The callback function accepts each element of the array as its argument,



  //2.this is in  the format [Array].map()                               
 let arr= Object.keys(props).map(
    function(key){
      // console.log(props[obj].type);
      if(props[key].isInput)//username.isInput                
          {return <>
           <label htmlFor={props[key].label}>{props[key].label}</label>
        <input
          className="form-input"
          key={key}
          ref={props[key].ref}
          type={props[key].type}
          id={props[key].label}
          placeholder={props[key].placeholder}
        />
          
          </> }
      else{
        {return (
          <>
       <button
            className="form-button"
            key={key}
            type="submit"
            onClick={props[key].handler}
          >
            {props[key].buttonText}
          </button>
          </>
        )}
      }

    }
  );

  return (
    <>
   {/* <p>{}</p>  */}
   <p>{arr}</p> 
    
    </>
  )
}


