import React from 'react';


const Hello = (props) =>{
  return(
    <div>
      <p>hello {props.name}, you are {props.age} years old!!</p>
    </div>
  )
}


const App = () => {
  const name = 'mejri';
  const age = 25;
  
  return(
    <div>
      <h1>Greeting</h1>
      <Hello name="seyf" age={26 + 10} />
      <Hello name={name} age={age} />

    </div>
  )
}
export default App;
