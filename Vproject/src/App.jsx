import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/header'
import Menu from './components/Menu'
import Diary from './components/Diary'
import Foods from './components/Foods'
import Shop from './components/Shop'
import Field from './components/Field'


function App() {
  // let {a, b, c} = props;
  // 유저 정보  --host 0.0.0.0 --port 8080
  // 감자 수확 갯수
  const [gamCount, setGamCount] = useState(0);
  // 감자 생성 제한
  const [limNum, setLimNum] = useState(10);

  // 유저 업그레이드
  // 감자 획득
  const [gamGet, setGamGet] = useState(1);

  // menu
  const [menuck, setMenuck] = useState(0);


  return (
    <>
      <Header/>
      <Menu setMenuck={setMenuck} gamCount={gamCount}/>
      { menuck === 0 ? <div className='wrapper spinBox'><img className='spin' /></div> : "" }
      { menuck === 1 ? <Diary /> : "" }
      { menuck === 2 ? <Foods /> : "" }
      { menuck === 3 ? <Shop gamGet={gamGet} setGamGet={setGamGet} gamCount={gamCount} setGamCount={setGamCount} /> : "" }
      { menuck === 4 ? <Field gamCount={gamCount} setGamCount={setGamCount} limNum={limNum} gamGet={gamGet} /> : "" }
    </>
  )
}

export default App
