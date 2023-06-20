import React from 'react'
import { Link } from 'react-router-dom'

function Menu( {gamCount} ) {

  return (
    <div id="menuBox">
        <div id="gamja">
            <p>이름 : Gamja</p>
            <p id="gamjaCoin"><span title='감자코인'></span>: {gamCount}</p>
        </div>
        <ul id="menuList">
            <li><Link to="/diary">수업 내용</Link></li>
            <li><Link to="/food">감자 요리</Link></li>
            <li><Link to="/shop">감자 상점</Link></li>
            <li><Link to="/field">감자 밭</Link></li>
        </ul>
    </div>
  )
}

export default Menu