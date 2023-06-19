import React, {useState} from 'react'

function BtmCal() {
    // 날짜 조회하기
    const [year, setYear] = useState(new Date().getFullYear());
    const [month, setmonth] = useState(new Date().getMonth());
    const [date, setDate] = useState(new Date().getDate());

    // 현재 일자 확인
    const dayChk = () => {
        const dChk = new Date();
        return dChk.getMonth() === month && dChk.getFullYear() === year ? true : false;
    };

    // 휴일 확인
    const holyChk = (nDay) => {
        const hChk = new Date(year, month, nDay);
        if(hChk.getDay() === 0) return " sun";
        else if(hChk.getDay() === 6) return " sat";
        else return "";
    };

    // 말일 구하기
    // 다음 달 기준으로 0하면 말일, 1이면 1일, 0이면 전달 말일
    let lastDate = new Date(year, month + 1, 0).getDate();
    // 시작일 구하기
    // 달력에서 1일이 시작할 위치
    let startDate = new Date(year, month, 1).getDay();

    // 날짜 이동
    function nextMonth() {
        if(month === 11) {
            setmonth(0); // Jan
            setYear(year + 1); // next yr
            return;
        }
        setmonth(month + 1);
    };
    function prevMonth() {
        if(month === 0) {
            setmonth(11); // Dec
            setYear(year - 1); // prev yr
            return;
        }
        setmonth(month - 1);
    };
    function mvToday() {
        setYear(new Date().getFullYear());
        setmonth(new Date().getMonth());
    }

  return (
    <div id="btmCal">
        <div className="btmHeader">
            <a href='#' onClick={prevMonth}>◀</a>
            <h2>{year}</h2>
            <h3>{month + 1}월</h3>
            <a href='#' onClick={nextMonth}>▶</a>
            <a href='#' className='goToday' onClick={() => mvToday()}>{date}</a>
        </div>
        <div className="btmMain">
            <ul className="btmMainDay">
                <li className='sun'>일</li>
                <li>월</li>
                <li>화</li>
                <li>수</li>
                <li>목</li>
                <li>금</li>
                <li className='sat'>토</li>
            </ul>
            <ul className='btmMainDate'>
                {
                    Array(startDate).fill().map((e, i) => {
                        return (
                            <li key={i} style={{ border: "none"}}></li>
                        )
                    })
                }
                {
                    Array(lastDate).fill().map((e, i) => {
                        return (
                            <li key={i} className={ i + 1 === date && dayChk()  ? "today" + holyChk(i + 1) : holyChk(i + 1) }>{i + 1}</li>
                        )
                    })
                }
            </ul>
        </div>
    </div>
  )
}

export default BtmCal