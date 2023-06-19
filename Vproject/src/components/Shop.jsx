import React from 'react'

const Shop = ({gamGet, setGamGet}) => {
    const shopGamGet = () => {
        if(gamGet === 7) {
            return alert("최대 업그레이드");
        }
        setGamGet(gamGet + 1);
    };


  return (
    <div id="shopBox" className='wrapper'>
        {
            [1,2,3,4,5,6].map((e)=> {
                return (
        <div className='goodsBox'>
            <div className='goodsImg'></div>
            <p>name</p>
            { gamGet === 7 ? <p>MAX</p> : <div className='goodsBtns'>
                <p>레벨 : {gamGet}</p>
                <button className='btn' onClick={shopGamGet}>구매</button>
            </div> }
        </div>
        )
            })
        }
    </div>
  )
}

export default Shop