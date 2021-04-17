import { useState } from 'react';

const App = () => {
  const [counter, setCounter] = useState(0)
  const increaseByOne = () => setCounter(counter + 1)
  const setToZero = () => setCounter(0)
  const decreaseByOne = () => setCounter(counter - 1)

  const Display = ({ counter }) => <h3>{counter}</h3>

  const Button = ({ className, handelClick, text }) => {
    return (
      <button className={className} onClick={handelClick}>
        {text}
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
    <div className="row">
      <div className="col-sm-6 col-sm-offset-3 text-center">
        <Display counter={counter} />
        <div className="btn-group" role="group">
          <Button handelClick={increaseByOne} text="Plus" className="btn btn-primary" />
          <Button handelClick={setToZero} text="Zero" className="btn btn-danger" />
          <Button handelClick={decreaseByOne} text="Minus" className="btn btn-info" />
        </div>
      </div>
    </div>
  )
}
export default App;