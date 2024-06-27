import { useRef } from 'react';
import { useEffect } from 'react';
import './App.css';

function TrafficLight() {

  let currentColor = 'red'
  const red = useRef(null)
  const orange = useRef(null)
  const green = useRef(null)

  function setColor (el, active) {
    el.current.style.opacity = active ? 1 : 0.4;
  }

useEffect(() => {
  setColor(red, true)
}, [])
function changecolor() {
  if(currentColor === 'red' ) {
    currentColor = 'green'
    setColor(green, true)
    setColor(red)
  } else if (currentColor === 'green') {
    currentColor = 'orange'
    setColor(orange, true)
    setColor(green)
  } else {
    currentColor = 'red'
    setColor(red, true)
    setColor(orange)
  }
  }
  return (
    <div className="TLwrapper">
      <div className="TL">
        <div ref={red} id='red' state={true}></div>
        <div ref={orange} id='orange' state={false}></div>
        <div ref={green} id='green' state={false}></div>
      </div>
      <button onClick={changecolor}>Переключити</button>
    </div>
  );
}

export default TrafficLight;
