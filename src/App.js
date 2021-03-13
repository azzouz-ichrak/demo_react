import React from 'react';


const Hello = (props) =>{
  return(
    <div>
      <p>hello {props.name}, you are {props.age} years old!!</p>
    </div>
  )
}

const Footer = () =>{
  const today = new Date()
  return(
    <div>
      hello app created {today.toString()}
    </div>
  )
}

const App = () => {
  const name = 'azzouz';
  const age = 25;
  
  return(
    <div>
      <h1>Greeting</h1>
      <Hello name="ichrak" age={26 + 10} />
      <Hello name={name} age={age} />
      <Footer />

    </div>
  )
}
export default App;
