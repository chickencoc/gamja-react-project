import React from 'react'

export default function ColorApp() {
    const changeColor = (e) => {
        const colorBox = document.getElementById("colorBox");
        colorBox.style.backgroundColor = `${e.target.innerText.toLowerCase()}`;
    };


  return (
    <div id="colorApp">
        <h1>ColorApp</h1>
        <div id="colorBox"></div>
        <div id="btnBox">
            <button className='btn' onClick={changeColor}>RED</button>
            <button className='btn' onClick={changeColor}>BLUE</button>
            <button className='btn' onClick={changeColor}>GREEN</button>
        </div>
    </div>
  )
}
