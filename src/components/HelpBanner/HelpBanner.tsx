import React, { useState } from 'react'
import help from "../../assets/images/helpbanner1.png"
import Button from '../Button/Button'
import "./HelpBanner.css"
const HelpBanner:React.FC<{bg:string,type:string,text:string}>=({bg,type,text})=>{
    const [name,setName]=useState("")
    const [phone,setPhone]=useState("")
    const [result,setResult]=useState("")

    console.log(name)
    console.log(phone)

    function validatePhoneNumber(phoneNumber:any) {
        const phonePattern = /^\+?[0-9\s()-]{7,15}$/;
        
        console.log(phonePattern.test(phoneNumber))
        return phonePattern.test(phoneNumber);
      }
  return (
    <>
        <div className="help-banner" style={{background:`url(${bg})`,backgroundSize:"cover",backgroundPosition:"center"}}>
            <div className={"help-banner__container "+type}>
            <div className="help-banner__main">
                <div className="help-banner__main-container">
                    <h2 className="help-banner__question">
                    {text}
                    </h2>
                    <p className='help-banner__action'>Оставьте свой номер 
                        и наш специалист поможет 
                        вам с подбором тура
                    </p>
                    <div className="help-banner__inputs">
                        <input onChange={(e)=>{setName(e.target.value)}} placeholder='Имя' className='help-banner__input' type="text" />
                        <input onChange={(e)=>{setPhone(e.target.value)}} placeholder='Телефон' className='help-banner__input' type="text" />
                    </div>
                    <div onClick={()=>validatePhoneNumber(phone)} className="help-banner__button">
                    <Button type='' text='ОТПРАВИТЬ' color='red'></Button>
                    </div>
                    
                </div>
            </div>
            </div>
            
        </div>
    </>
  )
}

export default HelpBanner
