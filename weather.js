let search_icon = document.querySelector("i");
let location_location=document.querySelector(".location");
let new_val=document.querySelector(".weather_weather");
let humidity=document.querySelector(".humidity");
let image=document.querySelector("img");
let attitude=document.querySelector(".attitude")

function weather(city)
{
    return new Promise((resolve,reject)=>{  
          let api_key="ba0ec1de4c221a0de74a90198de85f3e"
          let value_value=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`; 
          
          fetch(value_value)
          .then((val)=>val.json())
          .then((new_val)=>{ 
            
            return resolve(new_val)}
            )
          .catch((val)=>reject(val))
    })
}

search_icon.addEventListener("click", ()=>{ 
  
  let input_input=document.querySelector("input");
    weather(input_input.value).then((val)=>{
      let img_img=document.querySelector(".img_img") 
      img_img.innerHTML=`<img src="">` 
       
       let other_other=document.querySelector(".other");
       other_other.style.display="flex"
      location_location.innerHTML=val.name.toUpperCase()  
      if(val.weather[0].description=="mist")
      {
        img_img.querySelector("img").setAttribute("src", "eab96b88f8d04cd590fa0be0ccac9430.jpeg");
      
      } 
      else if(val.weather[0].description=="clear sky")
      {
        
       img_img.querySelector("img").setAttribute("src", "istockphoto-182493016-612x612.jpg");
       // img_img.querySelector("img").setAttribute("src", "/eab96b88f8d04cd590fa0be0ccac9430.jpeg");
      

      }  
      else 
      {
        img_img.querySelector("img").setAttribute("src", "transparent-realistic-cloud-cloud-sky-white-floating-white-cloud-with-scattered-clouds-floating-in-sky657c5a53306dc4.0600392017026484031984.jpg");
      //img_img.querySelector("img").setAttribute("src", "/eab96b88f8d04cd590fa0be0ccac9430.jpeg");
      
      }  
      new_val.innerHTML=` temperature: ${Math.round(val.main.temp-273.15)} deg ${val.weather[0].description}`
      humidity.innerHTML=` humidity: ${val.main.humidity}`
      attitude.innerHTML=`attitude ${Math.round(val.coord.lon)}`
    }).catch((val)=>
    { 
      alert("please enter the valid data")
      window.location.reload()
    })
})

