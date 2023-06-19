import React from 'react'

function CstAlert({setCstArt}, props) {
    const shopGamGet = () => {
        if(gamGet === 2) {
            if(gamCount >= 10) {
                alert(`현재 감자 코인 : ${gamCount}\n필요한 감자 코인 : 100`)
                setGamCount(gamCount - 10);
            } else {
                return alert("코인 부족");
            }
        }
        if(gamGet === 1) setCstArt(true);
        if(gamGet === 7) return alert("최대 업그레이드");
        setGamGet(gamGet + 1);
    };

    console.log(props.gamCount);

  return (
    <div id='cstAlert'>
        <div id="cstMsgBox">
            <h3>Skill Name</h3>
            <div className='lineDiv'></div>
            <ul>
                <li><p>· 현재 코인 수: {props.gamCount}</p></li>
                <li><p>· 필요 코인 수: 10</p></li>
            </ul>
            <div id="cstMsgBtns">
                <button className='btn'>구매</button>
                <button className='btn' onClick={() => {setCstArt(false)}}>취소</button>    
            </div>
        </div>
    </div>
  )
}

export default CstAlert