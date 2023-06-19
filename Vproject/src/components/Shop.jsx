import React, { useState } from 'react'
import CstAlert from './shop/CstAlert';

const Shop = (props) => {
    const newProps = props;
    const [cstArt, setCstArt] = useState(false);


  return (
    <div id="shopBox" className='wrapper'>
        { cstArt && <CstAlert setCstArt={setCstArt} props={newProps} /> }
        
        <div className='goodsBox'>
            <div className='goodsImg'></div>
            <p>name</p>
            { props.gamGet === 7 ? <p>MAX</p> : <div className='goodsBtns'>
                <p>레벨 : {props.gamGet}</p>
                <button className='btn' onClick={() => {setCstArt(true)}}>구매</button>
            </div> }
        </div>

    </div>
  )
}

export default Shop