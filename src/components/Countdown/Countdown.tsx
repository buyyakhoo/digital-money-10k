import { useState, useEffect } from 'react'

function Countdown() {
  const selectNewPM : any = new Date('May 1, 2027 00:00:00')

  const [time, setTime] = useState({
    years: -1,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() =>  {
    const countDownst : number = setInterval(() => {
      
      const now : any = new Date()
      const diffTime = selectNewPM - now
      const diffSecond = Math.floor(diffTime / 1000)

      if (diffSecond < 0) {
        clearInterval(countDownst);
        setTime({
            years: 0,
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        })
      } else {
        setTime({
            years: Math.floor(diffSecond / 31536000),
            days: Math.floor(diffSecond % 31536000 / 86400),
            hours: Math.floor((diffSecond % 86400) / 3600),
            minutes: Math.floor((diffSecond % 3600) / 60),
            seconds: Math.floor(diffSecond % 60),
        })
      }
    }, 1000)

    return () => clearInterval(countDownst)

  }, [])

  return (
    time.years != -1 ? (
        <p className="text-2xl p-1 rounded-lg max-w-max text-indigo-200 bg-indigo-900">ภายใน {time.years} ปี {time.days} วัน {time.hours} ชั่วโมง {time.minutes} นาที {time.seconds} วินาที คุณจะได้เงินเพิ่มอีกรอบเนื่องจากเงินหมดกระเป๋าแล้ว</p>
    ) : (
        <p className="text-2xl p-1 rounded-lg max-w-max text-indigo-200 bg-indigo-900">กำลังประมวลผล</p>
    )
    
  )
}

export default Countdown