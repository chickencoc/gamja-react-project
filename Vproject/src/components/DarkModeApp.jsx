import React, { useState } from 'react'

export default function DarkModeApp() {
    const [dark, setDark] = useState(false);
    function darkBtn() { setDark(!dark)};

  return (
    <div id="darkModeApp" className={ dark ? "darkmode" : ""}>
        <div style={{textAlign: "center", marginBottom: "30px", lineHeight: "3.3em"}}>
            <h1>Dark Mode App</h1>
            { dark ? <button className='btn' onClick={darkBtn}>🌕 LightMode</button> : <button className='btn' onClick={darkBtn}>🌑 DarkMode</button> }
        </div>
        <article style={{padding: "0 20px"}}>
            <h2>Dark Mode is...</h2>
            <p>사용자 인터페이스에서 밝은 화면에 검은 글자 대신 어두운 화면에 흰 글자를 나타내는 테마.</p>
            <p>어두운 배경색과 밝은 글씨색을 쓰되, #000000(완벽한 검정)이나 #FFFFFF(완벽한 하양) 등의 색깔은 피하는 게 좋다. 극단적인 검정/하양은 눈을 더 피로하게 만들고 그닥 예쁜 색 조합도 아니기 때문이다. 따라서 완벽한 검정보다는 어두운 회색, 완벽한 하양보다는 밝은 회색을 써서 눈의 피로를 줄여야 한다.</p>
        </article>

    </div>
  )
}
