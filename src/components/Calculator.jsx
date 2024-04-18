import React, { useEffect, useState } from 'react'

export default function Calculator() {

    const [data,setData] = useState({open:null, close:null, account:1000, risk:1, contract:1})
    const [lot, setLot] = useState(0)

    const handleOnChange = (e) => {
        const field = e.target.id
        const val = e.target.value
        
        const newData = data
        
        switch(field){
            case 'opening':
                newData.open = val
                break;
            case 'closing':
                newData.close = val
                break;
            case 'size':
                newData.account = val
                break;
            case 'risk':
                newData.risk = val
                break;
            case 'contract':
                newData.contract = val
                break;
        }

        setData(newData)
        
    }

    const lotCalc = () => {
        const pip = Math.abs(data.open-data.close)
        const loss = (data.account*data.risk)/100
        const contract = data.contract
        
        let lot = loss/(pip*contract)
        lot = Math.round(lot*100000)/100000
        setLot(lot)
    }

    const onKeyDown = (e) => {
        if(e.key === "Enter"){
            return lotCalc()
        }
    }

    useEffect(()=>{

        document.addEventListener('keydown',onKeyDown)

        return () => {
            document.removeEventListener('keydown', onKeyDown)
        }

    },[])


  return (
    <div className='sm:w-[600px] h-auto m-auto relative border-2 bg-zinc-900 rounded-3xl border-[#6d35deab] p-5 text-xl'>
        <div className='grid grid-cols-1 sm:grid-cols-2 sm:m-2'>
            <div className='h-auto w-auto m-3 sm:m-5'>
                <label htmlFor='opening'>Opening Price</label>
                <input id='opening' placeholder='opening price' className='w-full h-10 mt-2 p-3 selection:text-black selection:bg-white shadow-sm focus:outline-none focus:shadow-white shadow-[#6c35de] text-[#ffffff] placeholder:text-[#999999] placeholder:text-lg bg-zinc-800 border border-[#6c35de] rounded-lg' onChange={handleOnChange}></input>
            </div>
            <div className='h-auto w-auto m-3 sm:m-5'>
                <label htmlFor='closing'>Stop Price</label>
                <input id='closing' placeholder='stop price' className='w-full h-10 mt-2 p-3 selection:text-black selection:bg-white shadow-sm focus:outline-none focus:shadow-white shadow-[#6c35de] text-[#ffffff] placeholder:text-[#999999] bg-zinc-800 border border-[#6c35de] rounded-lg' onChange={handleOnChange}></input>
            </div>
            <div className='h-auto w-auto m-3 sm:m-5'>
                <label htmlFor='size'>Account Size</label>
                <input id='size' placeholder='account size' className='w-full h-10 mt-2 p-3 selection:text-black selection:bg-white shadow-sm focus:outline-none focus:shadow-white shadow-[#6c35de] text-[#ffffff] placeholder:text-[#999999] bg-zinc-800 border border-[#6c35de] rounded-lg' onChange={handleOnChange}></input>
            </div>

            <div className='h-auto w-auto m-3 sm:m-5'>
                <label htmlFor='risk'>Risk %</label><br></br>
                <input id='risk' placeholder='risk percentage' className='w-full h-10 mt-2 p-3 selection:text-black selection:bg-white shadow-sm focus:outline-none focus:shadow-white shadow-[#6c35de] text-[#ffffff] placeholder:text-[#999999] bg-zinc-800 border border-[#6c35de] rounded-lg' onChange={handleOnChange}></input>
            </div>
            <div className='h-auto w-auto m-3 sm:m-5'>
                <label htmlFor='contract'>Contract Size</label><br></br>
                <input id='contract' placeholder='contract size' className='w-full h-10 mt-2 p-3 selection:text-black selection:bg-white shadow-sm focus:outline-none focus:shadow-white shadow-[#6c35de] text-[#ffffff] placeholder:text-[#999999] bg-zinc-800 border border-[#6c35de] rounded-lg' onChange={handleOnChange}></input>
            </div>
        </div>
        <div className='flex justify-center items-center m-5'>
            <button onClick={lotCalc} className='border border-[#6c35de] bg-zinc-800 hover:opacity-100 opacity-80 hover:shadow-sm hover:shadow-white rounded-xl sm:w-[150px] p-2 '>Calculate</button>
        </div>
        <span className='flex justify-center items-center m-3 sm:m-5 text-2xl'>
        {lot ? lot: <></>}
        </span>
    
    </div>
  )
}
