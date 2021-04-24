import { useState } from 'react';

const App = () => {
  // const [left, setLeft] = useState(0)
  // const [right, setRight] = useState(0)
  const [clicks, setClicks] = useState({ left: 0, right: 0 })

  // const handleLeftClick = () => {
  //   const newClicks = {
  //     // right: clicks.right,
  //     ...clicks,
  //     left: clicks.left + 1
  //   }
  //   setClicks(newClicks)
  // }
  const handleLeftClick = () => setClicks({ ...clicks, left: clicks.left + 1 })
  // const handleLeftClick = () =>{
  //   clicks.left++
  //   setClicks(clicks)
  // }
  const handleRightClick = () => setClicks({ ...clicks, right: clicks.right + 1 })
  // const handleRightClick = () => {
  //   const newClicks = {
  //     // left: clicks.left,
  //     ...clicks,
  //     right: clicks.right + 1
  //   }
  //   setClicks(newClicks)
  // }

  return (
    <div className="text-center">
      {clicks.left}
      <button onClick={handleLeftClick} className="btn btn-info">
        Left
        </button>
      <button onClick={handleRightClick} className="btn btn-danger">
        Right
        </button>
      {clicks.right}
    </div>
  )
}
export default App;