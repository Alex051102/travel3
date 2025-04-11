import React, { useEffect, useState } from 'react'
import Button from '../Button/Button'
import "./PickUpArea.css"
import leftArrow from "../../assets/icons/leftArrow.svg"
import rightArrow from "../../assets/icons/rightArrow.svg"
export default function PickUpArea() {

    const movedTo=document.querySelector('.pick-up-area__sub-country')
    const calend=document.querySelector('.pick-up-area__sub-calendar')
    const nights=document.querySelector('.pick-up-area__sub-how-days')
    const howPeople=document.querySelector('.pick-up-area__sub-people')
    let kCountry=0;
    let kCalend=0;
    let kNights=0;
    let kHowPeople=0;
    const countries=[
        'Австралия',
        'Австрия',
        'Афганистан',
        'Албания',
        'Алжир',
    
        'Андора',
        'Ангола',
       
        'Аргентина',
        'Армения',
        
        'Азербайджан',
        
        'Бахрейн',
        'Бангладеш',
        'Барбадос',
        'Белиз',
        'Белоруссия',
        'Бельгия',
        
        'Болгария',
        'Боливия',
        
        'Ботсвана',
        'Бразилия',
        'Бруней',
        
        'Бурунди',
        'Ватикан',
        'Венгрия',
        'Венесуэла',
       
        'Габон',
        'Гамбия',
        'Гана',
        'Германия',
        'Гибралтар',
        'Греция',
        'Грузия',
        'Гренада',
        'Гренландия',
        'Гуам',
        'Гватемала',
        'Гвинея',
        
        'Дания',
        'Джерси',
        'Джибути',
        'Доминика',
       
        'Египет',
      
        'Зимбабве',
        'Индия',
        'Индонезия',
        'Иран',
        'Ирак',
        'Ирландия',
        'Израиль',
        'Италия',
        'Исландия',
        'Кабо-Верде',
        
        'Казахстан',
        'Камбоджа',
        'Камерун',
        'Канада',
        'Катар',
        'Кения',
        'Киргизия',
        'Кирибати',
        
        'Коста-Рика',
        'Куба',
        'Кипр',
        'КНДР',
        
        'Кувейт',
        'Лаос',
        'Латвия',
        'Лесото',
        'Либерия',
        'Ливан',
        'Ливия',
        'Лихтенштейн',
        'Литва',
        'Люксембург',
        'Макао',
        'Мадагаскар',
        'Малави',
        'Малайзия',
        'Мальдивы',
        'Мали',
        'Мальта',
        'Марокко',
        'Мартиника',
        'Мексика',
        'Микронезия',
        'Молдавия',
        'Монако',
        'Монголия',
        'Монтсеррат',
        'Мьянма',
        'Намибия',
        'Науру',
        'Непал',
        'Нидерланды',
        'Нигер',
        'Нигерия',
        'Ниуэ',
        'Норвегия',
        'Новая Каледония',
        'Новая Зеландия',
        'Никарагуа',
        'ОАЭ',
        'Оман',
        'Остров Буве',
        'Острова Кука',
        'Острова Питкэрн',
        
        'Палау',
        'Пакистан',
        'Панама',
        'Парагвай',
        'Перу',
        'Польша',
        'Португалия',
        'Пуэрто-Рико',
        'Реюньон',
       
        'Россия',
        'Руанда',
        'Румыния',
        'Сальвадор',
        'Самоа',
        'Сан-Марино',
        
        'Саудовская Аравия',
        'Сен-Бартелеми',
        'Сенегал',
        'Сербия',
        
        'Сент-Люсия',
        
        'Сингапур',
        'Словакия',
        'Словения',
       
        'Сомали',
        'Судан',
        'Суринам',
       
        'Таджикистан',
        'Таиланд',
        'Танзания',
       
        'Того',
        'Токелау',
        'Тонга',
        
        'Тувалу',
        'Турция',
        'Туркмения',
        'Уганда',
        'Узбекистан',
        'Уругвай',
      
        'Фиджи',
        'Финляндия',
        
        'Франция',
       
        'Чад',
        'Чили',
        'Чехия',
        'Швеция',
        'Швейцария',
        'Шри-Ланка',
        
        'Эвритрея',
        'Эквадор',
       
        'Эфиопия',
        
        'Ямайка',
        'Япония',
    ];
    
   
    const [swapeCountryTo,setCountryTo]=useState(<>
           <div className="pick-up-area__item-container">
                
                <p className='pick-up-area__item-no-choice'>КУДА</p>
              </div>
    </>)
    function chooseCountryTo(){

        if(selectedCountries.length==1){
            setCountryTo(<>
          <div className="pick-up-area__item-container">
                
                <p className='pick-up-area__item-choice-title'>КУДА</p>
                <p className='pick-up-area__item-choice-value'>{selectedCountries[0]}</p>
              </div>
                </>)
        }
        if(selectedCountries.length>1){
            setCountryTo(<>
              <div className="pick-up-area__item-container">
                
                <p className='pick-up-area__item-choice-title'>КУДА</p>
                <p className='pick-up-area__item-choice-value'>{selectedCountries[0]+"..."}</p>
              </div>
            </>)
            
        }
        
        if(selectedCountries.length==0){
            setCountryTo(<>
          <div className="pick-up-area__item-container">
                
                <p className='pick-up-area__item-no-choice'>КУДА</p>
              </div>
                </>)
        }


        movedTo?.classList.remove('pick-up-area__sub-country--open')


        

        /* const countryChecked = document.querySelector<HTMLInputElement>('#country');

        if (countryChecked) {
            countryChecked.checked = false; // Снимаем отметку
        } */
        
    }
    const popularCountries=["Турция","Египет","Мальдивы","ОАЭ","Германия","Испания","Италия"]


    let [selectedCountries,setSelectedCountries] = useState<string[]>([]);
    
    const clearSelections = () => {
        setSelectedCountries([]); // Очищаем выбранные страны
    };
    const handleLabelClick = (event:React.ChangeEvent<HTMLInputElement>) => {
        const country = event.target.id; 
        const isChecked=event.target.checked
      
        setSelectedCountries(prevCountries => {
            if (isChecked) {
              // Добавляем страну, если она выбрана
              console.log([...prevCountries, country])
              return [...prevCountries, country];
            } else {
              // Удаляем страну, если она не выбрана
      
              let indexToDelete = -1; // Инициализируем -1, чтобы знать, нашли ли мы индекс
              for (let i = 0; i < prevCountries.length; i++) {
                if (prevCountries[i] === country) {
                  indexToDelete = i;
                  break; // Выходим из цикла, как только нашли индекс
                }
              }
      
              if (indexToDelete !== -1) {
                const newCountries = [...prevCountries]; // Создаем копию массива
                newCountries.splice(indexToDelete, 1); // Удаляем элемент по индексу
                console.log(newCountries)
                return newCountries; // Возвращаем новый массив
              } else {
                console.log(prevCountries)
                return prevCountries; // Если элемент не найден, возвращаем исходный массив
              }
            }
          });
       
      };

    
   /*  ---------------------календарь функции---------------------- */
    const calendar=[{
        "month":"Январь",
        'startWeek':3,
        "days":31

    },{
        "month":"Февраль",
        'startWeek':6,
        "days":28

    },
    {
        "month":"Март",
        'startWeek':6,
        "days":31

    },
    {
        "month":"Апрель",
        'startWeek':2,
        "days":30

    },
    {
        "month":"Май",
        'startWeek':4,
        "days":31

    },
    {
        "month":"Июнь",
        'startWeek':7,
        "days":30

    },
    {
        "month":"Июль",
        'startWeek':2,
        "days":31

    },
    {
        "month":"Август",
        'startWeek':5,
        "days":31

    },
    {
        "month":"Сентябрь",
        'startWeek':1,
        "days":30

    },
    {
        "month":"Октябрь",
        'startWeek':3,
        "days":31

    },
    {
        "month":"Ноябрь",
        'startWeek':6,
        "days":30

    },
    {
        "month":"Декабрь",
        'startWeek':1,
        "days":31

    }]
    const [currentMonth,setCurrentMonth]=useState(0)
    
    function emptyDays(startWeekDay:number,days:number){
        const monthDays=[]
        for(let i=0;i<startWeekDay;i++){
            monthDays.push(" ")
        }
        for(let i=startWeekDay;i<days+startWeekDay;i++){
            monthDays.push(i-startWeekDay+1)
        }

        return monthDays

    }

    interface MonthMap {
        [key: string]: number;
      }
      
      const monthNames: MonthMap = {
        "Январь": 0, "Февраль": 1, "Март": 2, "Апрель": 3, "Май": 4, "Июнь": 5,
        "Июль": 6, "Август": 7, "Сентябрь": 8, "Октябрь": 9, "Ноябрь": 10, "Декабрь": 11
      };
      
      
      function parseDate(dateString: string): Date | null {
        const match = dateString.match(/^(\d{1,2})(.*)$/);
        if (!match) {
          return null;
        }
        const day = parseInt(match[1], 10);
        const monthName = match[2].trim();
        const month = monthNames[monthName];
      
        if (isNaN(day) || month === undefined || day < 1 || day > 31 || month < 0 || month > 11) {
          return null;
        }
      
        return new Date(2024, month, day);
      }
      
      
      function sortDates(dates: string[]): string[] {
        const parsedDates = dates.map(parseDate);
        const validDates = parsedDates.filter(date => date !== null) as Date[];
        validDates.sort((a, b) => a.getTime() - b.getTime());
        return validDates.map(date => `${date.getDate()}${Object.keys(monthNames).find(key => monthNames[key] === date.getMonth())}`);
      }
    const [dateFly,setDateFly]=useState <string[]>([])
    
    interface DateParts {
      day: string;
      month: string;
    }
    
    function splitDateString(dateString: string): DateParts | null {
      const monthNames: { [key: string]: string } = {
        "Январь": "Январь", "Февраль": "Февраль", "Март": "Март", "Апрель": "Апрель", "Май": "Май", "Июнь": "Июнь",
        "Июль": "Июль", "Август": "Август", "Сентябрь": "Сентябрь", "Октябрь": "Октябрь", "Ноябрь": "Ноябрь", "Декабрь": "Декабрь"
      };
    
      const match = dateString?.match(/^(\d{1,2})(.*)$/);
    
      if (!match) {
        return null; // Некорректный формат строки
      }
    
      const day = match[1];
      const month = match[2].trim();
    
      if (!monthNames.hasOwnProperty(month)) {
        return null; // Месяц не найден
      }
    
      return {
        day: day,
        month: month
      };
    }
    const allNumbers=document.querySelectorAll('.pick-up-area__sub-calendar-number')
    useEffect(()=>{
      const date1 = dateFly[0];
      const date2 = dateFly[1];
      
      const parts1 = splitDateString(date1);
      const parts2 = splitDateString(date2);

      const parts1Day=parts1?.day
      const parts2Day=parts2?.day
      const parts1Month=parts1?.month
      const parts2Month=parts2?.month
      
      
      allNumbers.forEach(num=>{
        if((num.classList.contains(`${parts1Month}`) && num.textContent==parts1Day) || (num.classList.contains(`${parts2Month}`) && num.textContent==parts2Day)){
          num.classList.add('green')
        }
        else{
          num.classList.remove('green')
        }
      })
    },[dateFly])

 

   
    
    
    function dateOnToFly(num:string,month:string){
       
        const str=num+month;
        
        setDateFly(dates => {
            let bool=false;
            let indToDelete=-1
            for (let i = 0; i < dates.length; i++) {
                if (dates[i] === str) {
                 bool=true
                 indToDelete=i;
                }}
            
            if (dates.length<2 && bool==false) {
              // Добавляем страну, если она выбрана
             
              const newDates= ([...dates, str]);
              const sortedDates: string[] = sortDates(newDates);
              console.log(sortedDates)
           
              return sortedDates;
            } 
            if (dates.length>1 && bool==false) {
                dates[1]=str;
                const sortedDates: string[] = sortDates(dates);
                console.log(sortedDates)
                return sortedDates
              }
            else{
                dates.splice(indToDelete,1)
                const sortedDates: string[] = sortDates(dates);
                console.log(sortedDates)
                return sortedDates
            }
            })
    }

    const clearSelectionsDateFly = () => {
      setDateFly([]); // Очищаем выбранные страны
  };

 

  const [swapeDateFly,setSwapeDateFly]=useState(<>
    <div className="pick-up-area__item-container">
                    <p className='pick-up-area__item-no-choice'>ВЫЛЕТ</p>
                </div>
</>)

function convertToDate(input: string): string {
  // Объект для сопоставления месяцев
  const monthMap: { [key: string]: string } = {
      "Январь": "01",
      "Февраль": "02",
      "Март": "03",
      "Апрель": "04",
      "Май": "05",
      "Июнь": "06",
      "Июль": "07",
      "Август": "08",
      "Сентябрь": "09",
      "Октябрь": "10",
      "Ноябрь": "11",
      "Декабрь": "12"
  };

  // Проверка, что входная строка не пустая
  if (!input) {
      return "Неверный формат даты";
  }

  // Извлечение числа и месяца из строки
  const numberPartMatch = input.match(/^\d+/);
  const monthPartMatch = input.match(/[а-яА-Я]+/i);

  if (!numberPartMatch || !monthPartMatch) {
      return "Неверный формат даты";
  }

  const numberPart = numberPartMatch[0]; // Получаем цифровую часть
  const monthPart = monthPartMatch[0]; // Получаем текстовую часть (месяц)

  // Добавление ведущего нуля к дню, если число меньше 10
  const day = numberPart.padStart(2, '0');

  // Получение номера месяца из monthMap
  const month = monthMap[monthPart];

  // Проверка, что месяц существует
  if (!month) {
      return "Неверный формат даты";
  }

  // Возвращаем результат в формате "DD.MM."
  return `${day}.${month}.`;
}


  function chooseDateFly(){

  if(dateFly.length==1){
    setSwapeDateFly(<>
    <div className="pick-up-area__item-container">
          
          <p className='pick-up-area__item-choice-title'>ВЫЛЕТ</p>
          <p className='pick-up-area__item-choice-value'>{convertToDate(dateFly[0])}</p>
        </div>
          </>)
  }
  if(dateFly.length==2){
    setSwapeDateFly(<>
        <div className="pick-up-area__item-container">
          
          <p className='pick-up-area__item-choice-title'>ВЫЛЕТ</p>
          <p className='pick-up-area__item-choice-value'>{convertToDate(dateFly[0])+" - "+convertToDate(dateFly[1])}</p>
        </div>
      </>)
      
  }
  
  if(dateFly.length==0){
    setSwapeDateFly(<>
    <div className="pick-up-area__item-container">
          
          <p className='pick-up-area__item-no-choice'>ВЫЛЕТ</p>
        </div>
          </>)
  }
  calend?.classList.remove('pick-up-area__sub-calendar--open')
}

                      /*--------------------Ночи------------------ */
   const [numNights,setNumNights]=useState <string[]>([])
   const [night1,setNight1]=useState("")
   const [night2,setNight2]=useState("")
   const [errorNum,setErrorNum]=useState('')
   const [swapeNumNights,setSwapeNumNights]=useState(<>
    <div className="pick-up-area__item-container">
          
          <p className='pick-up-area__item-no-choice'>НА СКОЛЬКО</p>
        </div>
          </>)
    
   function chooseNumNights(){

    
      if((numNights[0]!="" && numNights[1]=="" || numNights[0]=="" && numNights[1]!="") ){
        if((parseInt(numNights[0])>0 || parseInt(numNights[1])>0)&& (parseInt(numNights[0])<90 || numNights[0]=="") && (parseInt(numNights[1])<90 || numNights[1]=="")){
        setErrorNum("")
        setSwapeNumNights(<>
        <div className="pick-up-area__item-container">
              
              <p className='pick-up-area__item-choice-title'>НА СКОЛЬКО</p>
              <p className='pick-up-area__item-choice-value'>{`${numNights[0]?numNights[0]:numNights[1]} ночей`}</p>
            </div>
              </>)
            }
        if((parseInt(numNights[0])<0 || parseInt(numNights[1])<0)){
          setErrorNum("Неккоректно введены параметры,количество ночей не может быть отрицательно")
        }
        if((parseInt(numNights[0])>90 || parseInt(numNights[1])>90)){
          setErrorNum("Неккоректно введены параметры,количество ночей не может превышать 90")
        }
      }
      if(numNights[0]!="" && numNights[1]!=""){
      
        if(parseInt(numNights[0])>0 && parseInt(numNights[1])>0 && parseInt(numNights[1])<90  && parseInt(numNights[0]) < parseInt(numNights[1])){
          setErrorNum("")
          setSwapeNumNights(<>
            <div className="pick-up-area__item-container">
              
              <p className='pick-up-area__item-choice-title'>ВЫЛЕТ</p>
              <p className='pick-up-area__item-choice-value'>{`${numNights[0]} - ${numNights[1]} ночей`}</p>
            </div>
          </>)
        }
        if(parseInt(numNights[0])<0 || parseInt(numNights[1])<0){
          setErrorNum("Неккоректно введены параметры,количество ночей не может быть отрицательно")
        }
        if(parseInt(numNights[0])>90 || parseInt(numNights[1])>90){
          setErrorNum("Неккоректно введены параметры,количество ночей не может превышать 90")
        }
        if((parseInt(numNights[0])<0 || parseInt(numNights[1])<0)&&(parseInt(numNights[0])>90 || parseInt(numNights[1])>90)){
          setErrorNum("Неккоректно введены параметры")
        }
        
       
      
        
          
      }
   
    
    
      if(numNights[0]=="" && numNights[1]==""){
        setErrorNum("")
        setSwapeNumNights(<>
        <div className="pick-up-area__item-container">
              
              <p className='pick-up-area__item-no-choice'>НА СКОЛЬКО</p>
            </div>
              </>)
      }

      nights?.classList.remove('pick-up-area__sub-how-days--open')
  }

  useEffect(()=>{
    setNumNights([night1,night2])
  },[night1,night2])


  const clearNumNights = () => {
    let inputs=document.querySelectorAll('.pick-up-area__sub-how-days-input')
    inputs.forEach((inp:any)=>{
      inp.value=""
    })
    setNumNights([])
};
  console.log(numNights)
  /*--------------------Туристов------------------ */

  const [counterAdult,setCounterAdult]=useState(0)
  const [counterChildren,setCounterChildren]=useState(0)

 

  const [swapeCounterPeople,setSwapeCounterPeople]=useState(<>
    <div className="pick-up-area__item-container">
          
          <p className='pick-up-area__item-no-choice'>ТУРИСТЫ</p>
        </div>
          </>)
      function choosePeople(){
        setSwapeCounterPeople(<>
        
        <div className="pick-up-area__item-container">
              
              <p className='pick-up-area__item-choice-title'>ТУРИСТЫ</p>
              <p className='pick-up-area__item-choice-value'>{`${counterAdult}+${counterChildren}`}</p>
            </div>
        </>)

       howPeople?.classList.remove('pick-up-area__sub-people--open')
      }

 function incDecPeople(type:string,action:string){
  if(type=="adult"){
    if(action=="inc"){
      
        setCounterAdult(c=>c+1)
     
    }
  
    if(action=="dec"){
      if(counterAdult>0){
        setCounterAdult(c=>c-1)
      }
    }
  }

  if(type=="children"){
    if(action=="inc"){
      
        setCounterChildren(c=>c+1)
     
    }
  
    if(action=="dec"){
      if(counterChildren>0){
        setCounterChildren(c=>c-1)
      }
    }
  }
  
 }
 function clearCounters(){
  setCounterAdult(0);
  setCounterChildren(0)
 }

 
 function openCountry(){

  

  if(kCountry%2==0){
    movedTo?.classList.add('pick-up-area__sub-country--open')
    calend?.classList.remove('pick-up-area__sub-calendar--open')
    nights?.classList.remove('pick-up-area__sub-how-days--open')
    howPeople?.classList.remove('pick-up-area__sub-people--open')
    console.log(kCountry)
  }
 if(kCountry%2==1){
    movedTo?.classList.remove('pick-up-area__sub-country--open')
    
    console.log(kCountry)
 }
 kCountry++
 kCalend=0
 kHowPeople=0
 kNights=0

 /* const homepage=document.querySelector('.home')
 const movedToOpen=document.querySelector('.pick-up-area__sub-country--open')
 homepage?.classList.add('removeDisplay')
 
 */
 
 }
 function openCalend(){
  if(kCalend%2==0){
    movedTo?.classList.remove('pick-up-area__sub-country--open')
    calend?.classList.add('pick-up-area__sub-calendar--open')
    nights?.classList.remove('pick-up-area__sub-how-days--open')
    howPeople?.classList.remove('pick-up-area__sub-people--open')
  
  }
 if(kCalend%2==1){
    calend?.classList.remove('pick-up-area__sub-calendar--open')
    
    
 }
 kCountry=0
 kCalend++
 kHowPeople=0
 kNights=0
 }

 function openNights(){
  if(kNights%2==0){
    movedTo?.classList.remove('pick-up-area__sub-country--open')
    calend?.classList.remove('pick-up-area__sub-calendar--open')
    nights?.classList.add('pick-up-area__sub-how-days--open')
    howPeople?.classList.remove('pick-up-area__sub-people--open')
  
  }
 if(kNights%2==1){
    nights?.classList.remove('pick-up-area__sub-how-days--open')
    
    
 }
 kCountry=0
 kCalend=0
 kHowPeople=0
 kNights++
 }


 function openPeople(){
  if(kHowPeople%2==0){
    movedTo?.classList.remove('pick-up-area__sub-country--open')
    calend?.classList.remove('pick-up-area__sub-calendar--open')
    nights?.classList.remove('pick-up-area__sub-how-days--open')
    howPeople?.classList.add('pick-up-area__sub-people--open')
  
  }
 if(kHowPeople%2==1){
   howPeople?.classList.remove('pick-up-area__sub-people--open')
    
    
 }
 kCountry=0
 kCalend=0
 kHowPeople++
 kNights=0
 }
    
      return (
      <>
      <div className="pick-up-area">

          <div className="pick-up-area__container">
             {/*  <input type="checkbox" id="country" hidden></input>
              <input type="checkbox" id="calendar" hidden></input>
              <input type="checkbox" id="howDays" hidden></input>
              <input type="checkbox" id="nights" hidden></input>
              <input type="checkbox" id="people" hidden></input> */}
              <div className="pick-up-area__item pick-up-area__from">
                <div className="pick-up-area__item-container">
                  <p className='pick-up-area__item-no-choice'>ОТКУДА</p>
                </div>
              </div>
              <label
            
                  htmlFor="country"
                  className="pick-up-area__item pick-up-area__to"
                  onClick={openCountry}
                >
                
                  {/* <Button type="" text="ОСТАВИТЬ ЗАЯВКУ" color="white"></Button> */}
                
              {swapeCountryTo}
              </label>
              <label
            
                  htmlFor="calendar"
                  className="pick-up-area__item pick-up-area__date"
                  onClick={openCalend}
                >
              
                  {swapeDateFly}
              </label>
              <div className="pick-up-area__hotel">

                <label
              
                  htmlFor="nights"
                  className="pick-up-area__item pick-up-area__time"
                  onClick={openNights}
                  >
          
                {swapeNumNights}
                </label>

                
                  
                <label
            
            htmlFor="people"
            className="pick-up-area__item pick-up-area__number"
            onClick={openPeople}
          >
                    {swapeCounterPeople}
                  </label>
              </div>
              <div className="pick-up-area__item pick-up-area__send">
              <div className="pick-up-area__item-container ">
                  <Button type='' text="ПОДОБРАТЬ" color="red"></Button>
              </div>
              </div>

              <div className="pick-up-area__sub-country">
                  <div className="pick-up-area__sub-country-container">
                      <div className="pick-up-area__sub-country-adaptive">
                          
                      </div>
                      <div className="pick-up-area__sub-country-main">
                      <div className="pick-up-area__sub-country-popular">
                          <h3>Популярные</h3>
                      <form className='pick-up-area__sub-country-form'>
                          {popularCountries.map(item=>(
                              <div className="pick-up-area__sub-country-item">
                                <input onChange={handleLabelClick} /* checked={selectedCountries.includes(item)} */ type="checkbox" id={item} />
                                <label htmlFor={item}>{item}</label>
                              </div>
                          ))}
                          
                      </form>


                      </div>
                      <div className="pick-up-area__sub-country-all">
                      <h3>Все страны</h3>
                      <form className='pick-up-area__sub-country-form'>
                          {countries.map(item=>(
                              <div className="pick-up-area__sub-country-item">
                                  <input checked={selectedCountries.includes(item)} onChange={handleLabelClick} type="checkbox" id={item} />
                                  <label htmlFor={item}>{item}</label>
                              </div>
                          ))}
                          
                      </form>


                      </div>
                      </div>
                      <div className="pick-up-area__sub-country-actions">
                          <div className="pick-up-area__sub-country-actions-container">
                              <div onClick={clearNumNights} className="pick-up-area__sub-country-actions-item"><p>Очистить</p></div>
                              <div onClick={chooseCountryTo} className="pick-up-area__sub-country-actions-item"><Button type='sub-width' text='ВЫБРАТЬ' color='black'></Button></div>
                              
                          </div>
                          
                      </div>
                      
                  </div>
              </div>
              <div className="pick-up-area__sub-calendar">
                <div className="pick-up-area__sub-calendar-container">
                  <div className="pick-up-area__sub-calendar-dates">
                  <div className="pick-up-area__sub-calendar-arrow-outer">
                      <img onClick={()=>{currentMonth==0?setCurrentMonth(11):setCurrentMonth(c=>c=c-1)}} className='pick-up-area__sub-calendar-arrow' src={leftArrow} alt="" />
                  </div>
                  <div className="pick-up-area__sub-calendar-main">
                      <div className="pick-up-area__sub-calendar-month"> {calendar[currentMonth].month}</div>
                
                      <div className="pick-up-area__sub-calendar-days">
                          <div className="pick-up-area__sub-calendar-weekdays">
                              <p className='pick-up-area__sub-calendar-weekday'>пн</p>
                              <p className='pick-up-area__sub-calendar-weekday'>вт</p>
                              <p className='pick-up-area__sub-calendar-weekday'>ср</p>
                              <p className='pick-up-area__sub-calendar-weekday'>чт</p>
                              <p className='pick-up-area__sub-calendar-weekday'>пт</p>
                              <p className='pick-up-area__sub-calendar-weekday'>сб</p>
                              <p className='pick-up-area__sub-calendar-weekday'>вс</p>
                          </div>
                          <div className="pick-up-area__sub-calendar-numbers">
                              {emptyDays(calendar[currentMonth].startWeek,calendar[currentMonth].days).map((item:any)=>(
                                  <p onClick={()=>dateOnToFly(item,calendar[currentMonth].month)} className={'pick-up-area__sub-calendar-number '+ calendar[currentMonth].month}>{item}</p>
                              ))}
                          </div>
                          
                          
                     
                      
                      
                      </div>
                  </div>
                  
                  <div className="pick-up-area__sub-calendar-arrow-outer">
                      <img onClick={()=>{currentMonth==11?setCurrentMonth(0):setCurrentMonth(c=>c=c+1)}} className='pick-up-area__sub-calendar-arrow' src={rightArrow} alt="" />
                  </div>
                  </div>
                  
                  </div> <div className="pick-up-area__sub-country-actions">
                          <div className="pick-up-area__sub-country-actions-container">
                              <div onClick={clearSelectionsDateFly} className="pick-up-area__sub-country-actions-item"><p>Очистить</p></div>
                              <div onClick={chooseDateFly} className="pick-up-area__sub-country-actions-item"><Button type='sub-width' text='ВЫБРАТЬ' color='black'></Button></div>
                              
                          </div>
                </div>
              </div>
              <div className="pick-up-area__sub-how-days">
                <div className="pick-up-area__sub-how-days-container">
                  
                  <div className="pick-up-area__sub-how-days-inputs">
                    <div className="pick-up-area__sub-how-days-inputs-container">
                      <p>От</p>
                      <input min={1} onChange={(e)=>setNight1(e.target.value)} className='pick-up-area__sub-how-days-input' type="number" />
                      <p>До</p>
                      <input min={1}  onChange={(e)=>setNight2(e.target.value)} className='pick-up-area__sub-how-days-input' type="number" />
                       
                    </div>
                    <p className='error'>{errorNum}</p>
                    
                  </div>
                  <div className="pick-up-area__sub-country-actions">
                          <div className="pick-up-area__sub-country-actions-container">
                              <div onClick={clearNumNights} className="pick-up-area__sub-country-actions-item"><p>Очистить</p></div>
                              <div onClick={chooseNumNights} className="pick-up-area__sub-country-actions-item"><Button type='sub-width' text='ВЫБРАТЬ' color='black'></Button></div>
                              
                          </div>
                  </div>
                  
                </div>
              </div>

              <div className="pick-up-area__sub-people">
                <div className="pick-up-area__sub-people-container">
                  <div className="pick-up-area__sub-people-main">
                  <div className="pick-up-area__sub-people-category">
                    <p className='pick-up-area__sub-people-category-name'>Взрослые</p>
                    <div className="pick-up-area__sub-people-counter">
                      <button onClick={()=>{incDecPeople('adult',"dec")}} className='pick-up-area__sub-people-button pick-up-area__sub-people-button--minus'>-</button>
                      <p className='pick-up-area__sub-people-counter-num'>{counterAdult}</p>
                      <button onClick={()=>{incDecPeople('adult',"inc")}} className='pick-up-area__sub-people-button'>+</button>
                    </div>
                  </div>
                  <div className="pick-up-area__sub-people-category">
                    <p className='pick-up-area__sub-people-category-name'>Дети (0-17 лет)</p>
                    <div className="pick-up-area__sub-people-counter">
                      <button onClick={()=>{incDecPeople('children',"dec")}} className='pick-up-area__sub-people-button pick-up-area__sub-people-button--minus'>-</button>
                      <p className='pick-up-area__sub-people-counter-num'>{counterChildren}</p>
                      <button onClick={()=>{incDecPeople('children',"inc")}} className='pick-up-area__sub-people-button'>+</button>
                    </div>
                  </div>
                  </div>
                  
                  <div className="pick-up-area__sub-country-actions">
                          <div className="pick-up-area__sub-country-actions-container">
                              <div onClick={clearCounters} className="pick-up-area__sub-country-actions-item"><p>Очистить</p></div>
                              <div onClick={choosePeople} className="pick-up-area__sub-country-actions-item"><Button type='sub-width' text='ВЫБРАТЬ' color='black'></Button></div>
                              
                          </div>
                  </div>
                </div>
              </div>

          </div>
      </div>

      </>
    )
  }
