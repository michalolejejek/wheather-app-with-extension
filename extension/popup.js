document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("cityForm");
    const input = document.getElementById("cityInput");
    const weatherData = document.getElementById("weatherData");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault();
  
      const city = input.value;
      const apiKey = "f597674d5a94fe3414d65f7a9ad8b750"; // Zastąp "YOUR_API_KEY" własnym kluczem API z OpenWeatherMap
  
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
          const temperature = data.main.temp;
          const description = data.weather[0].description;
  
          weatherData.textContent = `Temperature: ${temperature}C, Description: ${description}`;
        })
        .catch(error => {
          weatherData.textContent = "Error retrieving weather data.";
        });
    });
  });
  