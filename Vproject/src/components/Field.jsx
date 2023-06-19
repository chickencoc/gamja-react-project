import React, { useState, useEffect, useRef } from 'react'

function Field( {gamCount, setGamCount, limNum, gamGet} ) {

  // 감자 생성
  const growPotato = () => {
      let potato = document.createElement("div");
      let deg = Math.round(Math.random() * 360);
      let pTop = Math.round(Math.random() * 100);
      let pLeft = Math.round(Math.random() * 100);
      potato.style.transform = `rotate(${deg}deg) translate(-50%, -50%)`;
      potato.style.top = `${pTop}%`;
      potato.style.left = `${pLeft}%`;
      potato.onclick = clkPotato;

      if(pTop <= 10) potato.className = "goldenPotato";
      else potato.className = "potato";

      document.getElementById("mapArea").append(potato);
      setLimPotato(limPotato + 1);
      console.log(`grow, ${limPotato}`);
  };
  // 감자 생성 반복
  const potatoRef = useRef();
  useEffect(() => {
    potatoRef.current = setInterval(growPotato, 1000);

    if(limPotato === limNum) {
      clearInterval(potatoRef.current);
      potatoRef.current = null;
    };

    return () => {
      clearInterval(potatoRef.current);
    };
  });
  
  // 감자 생성 갯수
  const [limPotato, setLimPotato] = useState(0);

  // 감자 수확
  const clkPotato = (e) => {
    const pName = e.target.className;
    switch (pName) {
      case "potato":
        e.target.parentNode.removeChild(e.target);
        setGamCount(gamCount => gamCount + gamGet);
        break;
      case "goldenPotato":
        e.target.parentNode.removeChild(e.target);
        setGamCount(gamCount => gamCount + (3 * gamGet));
        break;
      default:
        break;
    }
  };


  return (
    <div id="fieldBox" className='wrapper'>
        <div id='map'>
          <div id="mapArea"></div>
        </div>
        <div id='userInfo'>
          <h4>나의 감자 이야기</h4>
          <span>{gamCount}</span>
          
        </div>
    </div>
  )
}

export default Field