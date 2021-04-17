import { useState } from 'react';

const App = () => {
  const [counter, setCounter] = useState(0)
  const increaseByOne = () => setCounter(counter + 1)
  const setToZero = () => setCounter(0)
  const decreaseByOne = () => setCounter(counter - 1)

  const Display = (props) => {
    return (
      <h3>
        {props.counter}
      </h3>
    )
  }
  const Button = (props) => {
    return (
      <button className={props.className} onClick={props.handelClick}>
        {props.text}
      </button>
    )

  }

  /*
  setTimeout(
    () => setCounter(counter + 1),
    1000
  )
  */

  return (
    <div>
      <Display counter={counter} />
      <div className="btn-group " role="group" aria-label="...">
        <Button  handelClick={increaseByOne} text="plus" className="btn btn-primary" />
        <Button handelClick={setToZero} text="zero" className="btn btn-info" />
        <Button handelClick={decreaseByOne} text="minus" className="btn btn-danger" /> 
      </div>


    </div>
  )
}
export default App;