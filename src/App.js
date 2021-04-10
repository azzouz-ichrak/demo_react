import { useState } from 'react';

const App = () => {
  const [counter, setCounter] = useState(0)

  // setTimeout(
  //   () => setCounter(counter + 1),
  //   1000
  // )
  const handleClick = () => {
    console.log('clicked!!')
  }

  // console.log('rendering...', counter)

  return (
    <div>
      <h3>
        {counter}
      </h3>
      <button onClick={() => setCounter(counter + 1)}>
        Plus
      </button>
    </div>
  )
}
export default App;
