import React from 'react';

const App = (props) => {
  const { counter } = props

  return (
    <div>
      <h3>
        {counter}
      </h3>
    </div>
  )
}
export default App;
