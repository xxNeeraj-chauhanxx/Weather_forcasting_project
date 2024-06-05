const searchinput=document.querySelector(".box input");
const searchbtn=document.querySelector(".box button");
const winfo= document.querySelector(".winfo")
const Apikey="5b102ebd640945d2b9051410232910"


async function checkweather(city) {
    let Api=`http://api.weatherapi.com/v1/current.json?key=5b102ebd640945d2b9051410232910&q=${city}&aqi=yes`
    const responce= await fetch(Api);

    if(responce.status== 400){
        document.querySelector(".error").style.display="block"
        document.querySelector(".error").style.animation="shake 0.3s"
        document.querySelector(".weather").style.display="none"
    }
    else{
          var data =await responce.json();
         
         
    }
  
    
document.querySelector(".location").innerHTML=data.location.name;
document.querySelector(".region").innerHTML=data.location.region+" | "+data.location.country;
document.querySelector(".des").innerHTML=data.current.condition.text;
document.querySelector(".tempc").innerHTML=Math.round(data.current.temp_c)+'°C';
document.querySelector(".tempf").innerHTML=Math.round(data.current.temp_f)+'°F';
document.querySelector(".wind").innerHTML=data.current.wind_kph + 'kmph';
document.querySelector(".humidity").innerHTML=data.current.humidity+'%';
document.querySelector(".winfo").src=data.current.condition.icon;
document.querySelector(".weather").style.display ="block"
document.querySelector(".error").style.display="none"

Time(data.location.localtime)
}

searchbtn.addEventListener('click', ()=>{
    checkweather(searchinput.value)
})

function Time(time){
    let dt=time;
   let localtime=  dt.split(" ")[1]
   let date= dt.split(" ")[0]
   let day= getday(new Date(date).getDay());
 

   document.querySelector(".time").innerHTML= `${localtime} | ${date} | ${day}`;

}
function getday(number) {
    switch (number) {
        case 0:
            return "Sunday";
            break;
        case 1:
                return "Monday";
                break;
        case 2:
            return "Tueday";
            break;
        case 3:
            return "Wednesday";
            break;
        case 4:
            return "Thursday";
            break;
        case 5:
            return "Friday";
            break;
        case 6:
            return "Satday";
            break;
            
        default:
            break;
    }
    
}
