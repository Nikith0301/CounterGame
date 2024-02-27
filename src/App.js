import { useRef } from 'react';
import CustomForm from './CustomForm.js';
import HomePage from './components/HomePage/HomePage.js'
import Game from './components/XandO/Game.js';
import CardGrid from './components/MemoryGame/CardGrid.js';





function App() {
  const usernameRef=useRef();
  const passwordRef=useRef();
  
  function handleLogin(){
    console.log('login');
    console.log(usernameRef.current.value);
    console.log(passwordRef.current.value)
  }

  function handleRegister(){
    console.log('register');
    console.log(usernameRef.current.value);
    console.log(passwordRef.current.value)
  }

  return (
    <>
    {/* <HomePage/> */}
   
        {/* <CustomForm

        username={{
          type: "text",
          label: "Username",
          placeholder: "Enter Username",
          ref: usernameRef,
          isInput: true,
        }}
        password={{
          type: "password",
          label: "Password",
          placeholder: "Enter Password",
          ref: passwordRef,
          isInput: true,
        }}
        loginButton={{
          handler: handleLogin,
          buttonText: "Login",
          isInput: false,
        }}
       registerButton={{
        handler : handleRegister,
        isInput:false,
        buttonText:"Register"

       }}
      />


     */}
   {/* <Game style={{ textAlign: 'center', height: '100vh' }} /> */}
    <CardGrid/>
    
    </>
  );
}

export default App;