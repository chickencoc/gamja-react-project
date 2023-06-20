import React from 'react'

function Menu( {setMenuck, gamCount} ) {

  return (
    <div id="menuBox">
        <div id="gamja">
            <p>이름 : Gamja</p>
            <p id="gamjaCoin"><span title='감자코인'></span>: {gamCount}</p>
        </div>
        <ul id="menuList">
            <li><a href="#" onClick={() => setMenuck(1)}>수업 내용</a></li>
            <li><a href="#" onClick={() => setMenuck(2)}>감자 요리</a></li>
            <li><a href="#" onClick={() => setMenuck(3)}>감자 상점</a></li>
            <li><a href="#" onClick={() => setMenuck(4)}>감자 밭</a></li>
        </ul>
    </div>
  )
}

export default Menu