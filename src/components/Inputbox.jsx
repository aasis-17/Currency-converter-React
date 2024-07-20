import React, { useId } from "react"

export default function Inputbox ({
    label,
    amount,
    setAmount,
    currencyOptions,
    selectValue,
    selectChange,
    isDisable
}){
    const id = useId()
    return (
        <div className="w-full h-[70px]   flex justify-around items-end text-white shadow-xl border border-gray-700">
            <div className="flex flex-col">
                <label htmlFor = {id}>{label}</label>
                <input 
                readOnly= {isDisable} 
                className=' w-[100px] outline-none text-right bg-transparent' 
                 id = {id} 
                 type="number"
                 value={amount}
                onChange={(e) =>{
                    setAmount(Number(e.target.value))
                }} ></input>
            </div>

            <select value={selectValue} onChange={(e) => selectChange(e.target.value)} className="w-[50px] h-[30px] bg-transparent outline-none ">
                {currencyOptions?.map((currency) => {
                   return <option className="text-black" key={currency} value={currency}>{currency}</option>
                })}
            
            </select>
        </div>
    )
}