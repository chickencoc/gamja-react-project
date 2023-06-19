import React, { useState, useRef, useEffect } from 'react'

const VideoPlayerApp = () => {
  // 전체시간
  const [dur, setDur] = useState(0);
  // 현재시간
  const [cur, setCur] = useState();
  // video tag 참조
  const videoRef = useRef();

  // video play hook
  useEffect(() => {
    setCur(videoRef.current.currentTime.toFixed(2));
    videoRef.current.onloadedmetadata = () => {
      setDur(videoRef.current.duration.toFixed(2));
    };
    
    let videoInterval = setInterval(() => {
      setCur(videoRef.current.currentTime);
    }, 100);
    
    return () => {
      clearInterval(videoInterval);
    };
  }, [cur]);

  // player button
  const playVideo = () => {
    videoRef.current.play();
  };
  const playPause = () => {
    videoRef.current.pause();
  };
  const playStop = () => {
    videoRef.current.currentTime = 0;
    videoRef.current.pause();
  };
  const [버튼, 버튼변경] = useState(false);
  const 버튼함수 = (e) => {
    const 이미지 = e.target.children;
    if(버튼) {
      videoRef.current.pause();
      버튼변경(!버튼);
      
    } else {
      videoRef.current.play();
      버튼변경(!버튼);
      이미지[0].style.opacity = 1;
      setTimeout(function() {
        이미지[0].style.transform = "scale(1.2)";
        이미지[0].style.opacity = 0;
      }, 300);

    }
  };

  return (
    <div id="vPlayer">
      <h1>React Video Player</h1>
      <div id="videoBox">
        <div className="clkbtn" onClick={버튼함수}>
          <div id="playImg">▶</div>
          <div id="pauseImg">❚❚</div>
        </div>
        <video ref={videoRef} src='media/fringPotato.mp4' />
      </div>
      <div id="timeBox">
        <p>0:{Math.round(cur)} / 0:{Math.round(dur)}</p>
        <progress max={dur} value={cur} />
      </div>
      <div id="playerBtns">
        <button id="play" className='btn' onClick={playVideo}>PLAY</button>
        <button id="pause" className='btn' onClick={playPause}>PAUSE</button>
        <button id="stop" className='btn' onClick={playStop}>STOP</button>
      </div>
    </div>
  )
}

export default VideoPlayerApp