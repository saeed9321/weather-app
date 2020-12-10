
function findTemp(city){
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(location => {
            lon = location.coords.longitude;
            lat = location.coords.latitude;
            if (city){api = "http://api.weatherstack.com/current?access_key=668b42a4142c68f9bdd7b4870c6d2298&query="+city;
            } else {
                api = "http://api.weatherstack.com/current?access_key=668b42a4142c68f9bdd7b4870c6d2298&query="+lat+","+lon;
            }
            fetch(api).then(response =>{
                return response.json();
            })
            .then(data =>{
                temp = data.current.temperature;
                city = data.location.region;
                time = data.location.localtime;
                time = time.slice(10, time.length)
                document.getElementById('location').innerHTML = city;
                document.getElementById('temp').innerHTML = temp+"°C";
                document.getElementById('localTime').innerHTML = time;
            })
        })
    }}

city_img = document.getElementById('data1')
btns = document.querySelectorAll('[id*="select"]')
btns.forEach(btn => {
    btn.addEventListener('click', ()=>{
        if (btn.id == "select1"){
            findTemp();
            city_img.style.backgroundImage = "url('imgs/current.jpg')";
        } else {
            findTemp(btn.innerHTML);
            if (btn.id == "select2") { city_img.style.backgroundImage = "url('imgs/paris.jpg')"; }
            if (btn.id == "select3") { city_img.style.backgroundImage = "url('imgs/london.jpg')"; }
            if (btn.id == "select4") { city_img.style.backgroundImage = "url('imgs/madrid.jpg')"; }
            if (btn.id == "select5") { city_img.style.backgroundImage = "url('imgs/newYork.jpg')"; }
            if (btn.id == "select6") { city_img.style.backgroundImage = "url('imgs/berlin.jpg')"; }
        }
    })
});

d = new Date();
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";

date = document.querySelector('#date')
date.innerHTML = weekday[d.getDay()] + ", " + d.getDate() + " " + month[d.getMonth()]

