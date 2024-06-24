import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react"
function App() {
  const [color, setcolor] = useState(["aqua", "aqua", "aqua", "aqua", "aqua", "aqua", "aqua", "aqua", "aqua"])
  const [order, setorder] = useState([])

  const boxClick = (num) => {
    console.log(order)
    const newColor = [...color];
    newColor[num.target.innerHTML - 1] = 'red';
    setcolor(newColor);
    setorder([...order, num.target.innerHTML - 1]);

  }
  useEffect(() => {

    if (order.length === 9) {
      order.forEach((idx, i) => {
        setTimeout(() => {
          setcolor((prevColors) => {
            const newColors = [...prevColors];
            newColors[idx] = 'aqua';
            return newColors;
          });

        }, i * 500);
      });
    }
  }, [order]);




  return (
    <div className="App">
      <div className="box" onClick={boxClick} style={{ backgroundColor: color[0] }}>
        1
      </div>
      <div className="box" onClick={boxClick} style={{ backgroundColor: color[1] }}>
        2
      </div>   <div className="box" onClick={boxClick} style={{ backgroundColor: color[2] }}>
        3
      </div>   <div className="box" onClick={boxClick} style={{ backgroundColor: color[3] }}>
        4
      </div>   <div className="box" onClick={boxClick} style={{ backgroundColor: color[4] }}>
        5
      </div>   <div className="box" onClick={boxClick} style={{ backgroundColor: color[5] }}>
        6
      </div>   <div className="box" onClick={boxClick} style={{ backgroundColor: color[6] }}>
        7
      </div>   <div className="box" onClick={boxClick} style={{ backgroundColor: color[7] }}>
        8
      </div>   <div className="box" onClick={boxClick} style={{ backgroundColor: color[8] }}>
        9
      </div>
    </div >
  );
}

export default App;
