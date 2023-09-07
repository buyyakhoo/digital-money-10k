import { useState, useEffect } from 'react'
import './App.css'

import Square from './components/Square/Square'
import DateTime from './components/DateTime/DateTime'
import Countdown from './components/Countdown/Countdown'

import { Transports, Residents, Educations, Foods, Subscriptions, Blanks } from './Data'

import audio from './assets/work.mp3';

function App() {
  const [money, setMoney] = useState<number>(10000)
  const [stuff, setStuff] = useState(Blanks);

  interface notedStuffss{
    name: string,
    price: number,
    count: number
  }

  const [notedStuffs, setNotedStuffs] = useState<notedStuffss[]>([]);

  interface Mode {
    name: string,
    dat: any
  }

  const mode : Mode[] = [
    {
      name: 'Resident',
      dat: Residents
    },
    {
      name: 'Transport',
      dat: Transports
    },
    {
      name: 'Education',
      dat: Educations
    },
    {
      name: 'Food',
      dat: Foods
    },
    {
      name: 'Subscription',
      dat: Subscriptions
    }
  ]

  const playAudio = () => {
    const audios = new Audio(audio);
    audios.volume = 0.3;
    audios.loop = true;
    audios.play();
  }

  const checkMoney = (money: number) => {
    if (money <= 0) {
      alert('เงินหมดแล้ว')
      setStuff([]);
      playAudio();    
    }
  }

  const notedStuffIn = (item: any) => {
    if (notedStuffs.some((e) => e.name === item.name)) {
      setNotedStuffs(notedStuffs.map((e) => e.name === item.name ? {...e, count: e.count + 1} : e))
    } else {
      setNotedStuffs([...notedStuffs, {...item, count: 1}])
    }
  }
  
  const bought = (item: any) => {
    setMoney(money - item.price)
    notedStuffIn(item);
  }

  useEffect(() => {
      checkMoney(money);
    }, [money]
  )

  return (
    <>
      <div className="relative flex items-center justify-center h-screen bg-red-800">
        <div className="relative text-white flex flex-col items-center w-4/5 md:w-[45rem] h-full bg-blue-800 p-5 gap-3 z-10">
          <h1 className="text-5xl p-2 bg-blue-900 rounded">เงินดิจิตอล <span className="text-6xl font-extrabold">10,000</span> บาท</h1>
          <p className="text-3xl p-2 bg-blue-900 rounded">ซื้ออะไรได้บ้าง</p>
          <div className="flex flex-wrap items-center justify-center text-center w-full gap-5">
            {
              stuff.length > 0 && money > 0 ? (
                mode.map((item) => {
                  return (
                    stuff != item.dat && money > 0 ? (
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold h-7 w-24 rounded" onClick={() => setStuff(item.dat)}>{item.name}</button>
                    ) : 
                    money > 0 ? (
                      <button className="bg-red-500 hover:bg-red-700 text-white font-bold h-7 w-24 rounded" onClick={() => setStuff(item.dat)}>{item.name}</button>
                    ) : null
                  )
                })
              ) : (
                <p className="text-xl p-1 rounded-lg max-w-max text-red-200 bg-red-900"> ของที่ซื้อไปแล้วมีอะไรบ้าง </p>
              )
            }
          </div>
            {
              stuff.length > 0 && money > 0 && stuff != Blanks ? (
                <div className="flex flex-wrap items-center justify-center text-center w-4/5 h-96 gap-3 p-3 rounded bg-blue-900 overflow-y-auto"> 
                  { 
                  stuff.map((item) => {
                    return (
                      <div className="flex flex-col items-center justify-center gap-3 h-52 w-32 bg-red-500 rounded p-2">
                        <p className="w-28 text-ellipsis overflow-hidden ... font-bold">{item.name}</p>
                        <p>{item.price} บาท</p>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold h-7 w-12 rounded" onClick={() => bought(item)}>Buy</button>
                      </div>
                    )
                  }) 
                  }
                </div>
              ) :
              stuff == Blanks ? (
                <div className="flex flex-wrap items-center justify-center text-center w-4/5 h-3/6 gap-3 p-3 rounded">
                  <p className="w-28 text-3xl text-ellipsis overflow-hidden ... ">เลือกเมนูข้างบนนะครับ</p>
                </div>
              ) : 
              (
                <div className="flex flex-wrap items-center justify-center text-center w-full h-3/6 gap-3 p-3 rounded">
                  <div className="flex flex-wrap items-center justify-center text-center w-4/5 h-64 gap-3 mb-5 p-3 rounded bg-blue-900 overflow-y-auto"> 
                    { 
                      notedStuffs.map((item) => {
                        return (
                          <div className="flex flex-col items-center justify-center gap-3 h-56 w-32 bg-red-500 rounded p-2">
                            <p className="w-28 text-ellipsis overflow-hidden ... font-bold">{item.name}</p>
                            <p>{item.price} บาท</p>
                            <p>จำนวน: <span className="font-bold">{item.count}</span> </p>
                            <p className="bg-blue-900 p-1 rounded">รวมทั้งสิ้น <span className="font-bold">{item.price * item.count}</span> บาท</p>
                          </div>
                        )
                      }) 
                    }
                  </div>
                  <Countdown />
                  
                </div>
              )
            }
          
          <div className="flex flex-col gap-3 absolute bottom-10 items-center justify-center">
            {
              <p className="text-3xl text-red-200 bg-red-900 mt-10 p-1 rounded-lg max-w-max">เงินคงเหลือ <span className="font-bold">{money}</span> บาท</p>
            }
          </div>
          
        </div>

        <div className="absolute top-0 right-1 text-white">
          <DateTime />
        </div>

      </div>

      <Square />
    </>
  )
}

export default App
