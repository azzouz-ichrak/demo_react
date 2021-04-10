import { useState } from 'react';

const App = () => {
  const [counter, setCounter] = useState(0)

  setTimeout(
    () => setCounter(counter + 1),
    1000
  )

  console.log('rendering...', counter)

  return (
    <div>
      <h3>
        {counter}
      </h3>
    </div>
  )
}
export default App;
