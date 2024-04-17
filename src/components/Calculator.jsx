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
    <div className='w-[500px] h-[500px] m-auto relative border-2 border-black '>
        <div className='grid grid-cols-2 m-2'>
            <div className='h-auto w-auto m-5'>
                <label htmlFor='opening'>Opening Price</label>
                <input id='opening' value={data.open} placeholder='opening price' className='w-full h-10 mt-2 p-2 border border-black' onChange={handleOnChange}></input>
            </div>
            <div className='h-auto w-auto m-5'>
                <label htmlFor='closing'>Stop Price</label>
                <input id='closing' value={data.close} placeholder='closing price' className='w-full h-10 mt-2 p-2 border border-black' onChange={handleOnChange}></input>
            </div>
            <div className='h-auto w-auto m-5'>
                <label htmlFor='size'>Account Size</label>
                <input id='size' value={data.account} placeholder='account size' className='w-full h-10 mt-2 p-2 border border-black' onChange={handleOnChange}></input>
            </div>

            <div className='h-auto w-auto m-5'>
                <label htmlFor='risk'>Risk %</label><br></br>
                <input id='risk' value={data.risk} placeholder='risk percentage' className='w-full h-10 mt-2 p-2 border border-black' onChange={handleOnChange}></input>
            </div>
            <div className='h-auto w-auto m-5'>
                <label htmlFor='contract'>Contract Size</label><br></br>
                <input id='contract' value={data.contract} placeholder='contract size' className='w-full h-10 mt-2 p-2 border border-black' onChange={handleOnChange}></input>
            </div>
        </div>
        <div className='flex justify-center items-center'>
            <button onClick={lotCalc} className='border border-black hover:bg-slate-200 rounded-lg p-2 bg-primary text-primary-foreground hover:bg-primary/90'>Calculate</button>
        </div>
        <span className='flex justify-center items-center m-5 text-xl'>
        {lot ? lot: <></>}
        </span>
    
    </div>
  )
}
