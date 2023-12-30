
const cityname=document.querySelector('#cityname');
const submitBtn=document.getElementById('submitBtn');
const city_name=document.querySelector('#city_name');
const temp=document.querySelector('#temp');
const temp_status=document.querySelector('#temp_status');
const datahide=document.querySelector('.data_hide');
const currentday=document.querySelector('#day');
const currentdate=document.querySelector('#today_date');
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var date=new Date();
var d=date.getDay();
console.log(days[d]);
currentday.innerText=days[d];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var m=date.getMonth();
console.log(months[m]);
var t=date.getDate();
currentdate.innerText=`${t} ${months[m]}`;
const getInfo= async(event)=>{
    event.preventDefault();
   let cityval= cityname.value;
   if(cityval===""){
     city_name.innerText=`Plz writ city name` ;
     datahide.classList.add('data_hide');
   } 
   else{
    try{
    let url= `https://api.weatherapi.com/v1/current.json?key=a6b3d4e76a4b4bd199534831232809&q=${cityval}&aqi=no`
    const response= await fetch(url);
    
    const data= await response.json();
   const arrdata=[data];
   console.log(arrdata[0].location.name)
//    city_name.innerText=`${arrdata[0].name},${arrdata[0].sys.country}`;
    //  temp.innerText=arrdata[0].main.temp;
    city_name.innerText=`${arrdata[0].location.name},${arrdata[0].location.country}`;
    temp.innerText=  `${arrdata[0].current.temp_c}°C`;
    //  temp_status.innerText=arrdata[0].weather[0].main;
     const tempmood=arrdata[0].current.condition.text;

     
     if(tempmood=="Overcast"){
        temp_status.innerHTML=
        "<i class='fa-solid fa-cloud'></i>"
     }
      else if(tempmood=="Fog"){
        temp_status.innerHTML=
        "<i class='fa-solid fa-smog'></i>"
      }
      else if(tempmood=="Rain"){
        temp_status.innerHTML=
        "<i class='fa-solid fa-cloud-rain'></i>"
     }
     else if(tempmood=="Clear"){
        temp_status.innerHTML=
      "<i class='fa-solid fa-sun-plant-wilt'></i>"
    
     }
      else{
        temp_status.innerHTML=
        "<i class='fa-solid fa-cloud'></i>"
     }
     datahide.classList.remove('data_hide');

    }
catch (error){
    city_name.innerText=`Plz enter city name properly`
    datahide.classList.add('data_hide');
    
}
   }
}
submitBtn.addEventListener('click',getInfo);