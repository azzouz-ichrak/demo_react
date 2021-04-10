import React from 'react';


const Hello = ({ name, age }) => {
  // const name = props.name
  // const age = props.age
  // const { name, age } = props
  // console.log("----props----", props)

  // const bornYear = () => {
  //   const yearNow = new Date().getFullYear()
  //   // console.log("yearNow", yearNow)
  //   return yearNow - props.age
  // }
  const bornYear = () => new Date().getFullYear() - age

  return (
    <div>
      <p>hello {name}, you are {age} years old!!</p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}

const App = () => {
  const name = 'mejri';
  const age = 25;

  return (
    <div>
      <h1>Greeting</h1>
      <Hello name="seyf" age={26 + 10} />
      <Hello name={name} age={age} />

    </div>
  )
}
export default App;
