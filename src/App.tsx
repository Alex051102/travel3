import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Button from "./components/Button/Button";
import exit from "../src/assets/icons/exit.svg"
import successImg from "../src/assets/icons/success.svg"
import Footer from "./components/Footer/Footer";
function App() {
  const [kSubHeader,setkSubHeader]=useState(0);
  
  const [modal,setModal] = useState(false);
  const[phone,setPhone]=useState('')
  const[name,setName]=useState('')
  const[success,setSuccess]=useState(false)
  const [subHeader,setSubHeader] = useState(false);
  const openModal = () => setModal(true);


  const [errorMess,setErrorMess]=useState("")
  const openHeader = () => {
    
    if(kSubHeader%2==0){
      setSubHeader(true)
    }
    if(kSubHeader%2==1){
      setSubHeader(false)
    }

    setkSubHeader(c=>c=c+1)
    };
  const sub = document.querySelector(".header__sub-request") as HTMLInputElement;

  console.log(kSubHeader)


  useEffect(()=>{
    if(success==true){
      
      sub.style.display="none"
      setTimeout(
        () => {
          closeModal();
          setSuccess(false);
        },2 * 1000
        );
       
       
    }
    
  },[success])

  if(sub){
    sub.style.display="flex";
  }
  
  function validatePhoneNumber(phoneNumber:any,name:string) {
    const phonePattern = /^\+?[0-9\s()-]{7,15}$/;
    let nameBool=false;
    if(name.length!=0){
      nameBool=true
    }
    if(name.length==0){
      nameBool=false
    }

    setErrorMess('Ошибка ввода данных')
    
    return (nameBool && phonePattern.test(phoneNumber));
  }
  function closeModal(){
    setModal(false)
    const resetPhone = document.querySelector(".reset__phone") as HTMLInputElement;
    const resetName = document.querySelector(".reset__name") as HTMLInputElement;
    
    if (resetPhone) {
        resetPhone.value = "";
    } 
    if (resetName) {
      resetName.value = "";
  } 
    else {
        console.error("Элемент не найден");
    }
  }
  return (
    <>
    
    <div className={modal==true?"modal active":"modal"}>
    <input type="checkbox" id="success" hidden></input>
      <div className="header__sub-request" onClick={(e)=>e.stopPropagation}>
          <div className="header__sub-request-container">
            <div className="header__sub-request-close-outer">
              <div className="header__sub-request-close"onClick={()=>closeModal()}>
                {/* <div className="header__sub-request-close-container">
                  <div className="header__sub-request-rect rect-left"></div>
                  <div className="header__sub-request-rect rect-right"></div>
                </div> */}
                <img onClick={()=>setErrorMess("")} src={exit} alt="" />
              </div>
            </div>
            
            <div className="header__sub-request-recall">
              <div className="header__sub-request-recall-container">
                <h2 className="header__sub-request-recall-title">ПЕРЕЗВОНИТЬ ВАМ?</h2>
              </div>
            </div>
            <div className="header__sub-request-text-outer">
              <div className="header__sub-request-text-container">
                <p className="header__sub-request-text">Оставьте свой номер и наш специалист свяжется с вами</p>
              </div>
            </div>
            <div className="header__sub-request-form">
              <form className="header__sub-request-form-container">
                <input className="header__sub-request-input reset__name" onChange={(e)=>setName(e.target.value)} placeholder="Имя" type="text" />
                <input className="header__sub-request-input reset__phone" onChange={(e)=>setPhone(e.target.value)}  placeholder="Телефон" type="text" />
              </form>
            </div>
            <div className="header__sub-request-button">
              <div className="header__sub-request-button-container" onClick={()=>setSuccess(validatePhoneNumber(phone,name))}>
                <Button type={"modal-mini"} text="ОТПРАВИТЬ" color="red"></Button>
                
              </div>
            </div>
          </div>
        </div>

        <p className="error-message">{errorMess}</p>
        {success?<div className="header__sub-success">
          <div className="header__sub-success-container">
            <img className="header__sub-success-img" src={successImg} alt="" />
            <h2 className="header__sub-success-text">ЗАЯВКА УСПЕШНО ОТПРАВЛЕНА</h2>
          </div>
        </div>
        :""}
        
      </div>
      
      
      <Header openHeader={openHeader} openModal={openModal}></Header>
      <div className={subHeader==true?"subHeader active":"subHeader dis"}>
      <Home></Home>
      <Footer></Footer>
      </div>
      
     
    </>
  );
}

export default App;
