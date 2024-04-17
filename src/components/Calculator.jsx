import React, { useState } from 'react'

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
        setLot(lot)
    }

  return (
    <div className='sm:w-[500px] h-auto m-auto relative border-2 bg-zinc-900 rounded-3xl border-[#6c35de] p-5'>
        <div className='grid grid-cols-1 sm:grid-cols-2 sm:m-2'>
            <div className='h-auto w-auto m-3 sm:m-5'>
                <label htmlFor='opening' className='py=3'>Opening Price</label>
                <input id='opening' placeholder='opening price' className='w-full h-10 mt-2 p-3 text-[#ffffff] placeholder:text-[#ffffff] bg-zinc-800 border border-[#6c35de] rounded-lg' onChange={handleOnChange}></input>
            </div>
            <div className='h-auto w-auto m-3 sm:m-5'>
                <label htmlFor='closing'>Stop Price</label>
                <input id='closing' placeholder='closing price' className='w-full h-10 mt-2 p-3 text-[#ffffff] placeholder:text-[#ffffff] bg-zinc-800 border border-[#6c35de] rounded-lg' onChange={handleOnChange}></input>
            </div>
            <div className='h-auto w-auto m-3 sm:m-5'>
                <label htmlFor='size'>Account Size</label>
                <input id='size' placeholder='account size' className='w-full h-10 mt-2 p-3 text-[#ffffff] placeholder:text-[#ffffff] bg-zinc-800 border border-[#6c35de] rounded-lg' onChange={handleOnChange}></input>
            </div>

            <div className='h-auto w-auto m-3 sm:m-5'>
                <label htmlFor='risk'>Risk %</label><br></br>
                <input id='risk' placeholder='risk percentage' className='w-full h-10 mt-2 p-3 text-[#ffffff] placeholder:text-[#ffffff] bg-zinc-800 border border-[#6c35de] rounded-lg' onChange={handleOnChange}></input>
            </div>
            <div className='h-auto w-auto m-3 sm:m-5'>
                <label htmlFor='contract'>Contract Size</label><br></br>
                <input id='contract' placeholder='contract size' className='w-full h-10 mt-2 p-3 text-[#ffffff] placeholder:text-[#ffffff] bg-zinc-800 border border-[#6c35de] rounded-lg' onChange={handleOnChange}></input>
            </div>
        </div>
        <div className='flex justify-center items-center m-5'>
            <button onClick={lotCalc} className='border border-[#6c35de] hover:bg-zinc-950 rounded-xl md:w-[150px] p-2 '>Calculate</button>
        </div>
        <span className='flex justify-center items-center m-5 text-xl'>
        {lot ? lot: <></>}
        </span>
    
    </div>
  )
}
