import React from 'react';


const Hello = (props) =>{
  const bornYear = () => {
    const yearNow = new Date().getFullYear()
    // console.log("yearNow", yearNow);
    return yearNow - props.age
  }
  return(
    <div>
      <p>hello {props.name}, you are {props.age} years old!!</p>
      <p>So you were probably born in {bornYear()}</p>
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
