const req = new XMLHttpRequest();
const url = "https://api.nasa.gov/planetary/apod?api_key=";
const api_key = "0jdPetMGbGYahyRaK6K4yJxvyOyM8zmoUO3OQHeG";

req.open("GET", url + api_key);
req.send();

req.addEventListener("load", function(){
	if(req.status == 200 && req.readyState == 4){
  	var response = JSON.parse(req.responseText);
    document.getElementById("title").textContent = response.title;
    document.getElementById("date").textContent = response.date;
    document.getElementById("pic").src = response.hdurl;
    document.getElementById("explanation").textContent = response.explanation;
  }
})
