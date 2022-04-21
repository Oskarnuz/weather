let btnGetWeather = document.getElementById("btn_get_weather");
btnGetWeather.addEventListener("click", function(event){
    event.preventDefault()
    getWeather()
    
  });

const getWeather = () => {
   
    const inputCity = document.getElementById("ciudad");
    const inputCountry = document.getElementById("pais");
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity.value},${inputCountry.value}&units=metric&appid=f247353a0653b47047ee1d9af9390ba6`
    queryApi(url)
}

const queryApi = (url) => {
    
    fetch(url)
	.then(response => response.json())
	.then(response => {
        
        const {name, main:{temp, temp_min, temp_max}}=response
        printWeather(response)
    })
	.catch(err => console.error(err));
}

const printWeather = (info) => {

    const {name, main:{temp, temp_min, temp_max}} = info;
    const weather = document.querySelector('#final_result');
    const card = document.createElement('div');
    card.classList.add('card');
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    const cardTitle = document.createElement('p');
    cardTitle.classList.add('card-title', 'text-center', 'text-white', 'text-4xl', 'font-italic');
    cardTitle.innerHTML = `Clima en ${name}`;
    const cardText = document.createElement('p');
    cardText.classList.add('card-text', 'text-center', 'text-white', 'text-4xl', 'font-italic', 'font-bold');
    cardText.innerHTML = `${temp} °C`;
    const cardText3 = document.createElement('p');
    cardText3.classList.add('card-text', 'text-center', 'text-white','text-2xl', 'font-italic');
    cardText3.innerHTML = `Max: ${temp_max} °C`;
    const cardText2 = document.createElement('p');
    cardText2.classList.add('card-text','text-center', 'text-white','text-2xl', 'font-italic');
    cardText2.innerHTML = `Min: ${temp_min} °C`;
    weather.appendChild(card);
    card.appendChild(cardBody);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(cardText3);
    cardBody.appendChild(cardText2);
    const delet = document.getElementById("resultado");
    delet.remove();
     

}
