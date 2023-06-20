import React, { useEffect, useState } from 'react'
import ColorApp from './ColorApp'
import DarkModeApp from './DarkModeApp';
import CalenderApp from './diary/CalenderApp';
import VideoPlayerApp from './diary/VideoPlayerApp';
import { useLocation  } from 'react-router-dom';

function Diary() {
  const location = useLocation();
    // ColorApp
    const [tapTog, setTapTog] = useState(0);

    const dMenuList = ["GamjaInfo", "GamjaStory", "DiaryList", "ColorApp", "DarkModeApp", "CalenderApp", "VideoPlayerApp"];

    useEffect(() => {
      setTapTog(parseInt(location.hash.substring(1)));
    },[]);

  return (
    <div id="diaryBox" className='wrapper'>
        <div id="diaryMenu">
          <ul>
            {
              dMenuList.map((e, i) => {
                return (
                  <li key={i}><h3 key={i} onClick={() => setTapTog(i)}>- {e}</h3></li>
                )
              })
            }
          </ul>
        </div>
        <div id="diaryDetail">
            { tapTog === 3 && <ColorApp />}
            { tapTog === 4 && <DarkModeApp />}
            { tapTog === 5 && <CalenderApp />}
            { tapTog === 6 && <VideoPlayerApp />}
        </div>
        
    </div>
  )
}

export default Diary