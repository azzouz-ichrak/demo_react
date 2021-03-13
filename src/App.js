import React from 'react';

const App = () => {
  const now = new Date();
  console.log("NOW:---", now)
  const a = 10;
  const b = 20;
  console.log('hello from component');
  return(
    <div>
      <h1>hello world.. it's {now.toString()}</h1>
      <p>{a} + {b} = {a+b}</p>
    </div>
  )
}
export default App;
