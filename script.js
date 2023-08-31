const result = document.querySelector('.result')
const form = document.querySelector('.get-weather')
const nameCity = document.querySelector('#ciudad')
let difKelvin = 273.15



document.getElementById('botonBusqueda').addEventListener('click', () => {
    const ciudad = document.getElementById('ciudad').value
        if(ciudad){
            fetchDatosClima(ciudad)
        }
    })


    function fetchDatosClima(ciudad) {
    const apiId = '4c18fcfe2d7e61dbb2a53d767f318d62';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiId}`;
    
    fetch(url)
    .then(response =>  response.json())
    .then(response => mostrarDatosClima(response))
    }

    function mostrarDatosClima(response){
        console.log(response)
        const divDatosClima = document.getElementById('datosClima')
        divDatosClima.innerHTML=''
    
        const ciudadNombre = response.name
       const paisNombre = response.sys.country
        const temperatura = response.main.temp
       const humedad = response.main.humidity
        const descripcion = response.weather[0].description
       const icono = response.weather[0].icon

        const ciudadTitulo = document.createElement('h2')
        ciudadTitulo.textContent =  `${ciudadNombre}, ${paisNombre}`

        const temperaturaInfo = document.createElement('p')
        temperaturaInfo.textContent = `La temperatura es: ${Math.floor(temperatura-difKelvin)}ºC`

       const humedadInfo = document.createElement('p')
       humedadInfo.textContent = `La humedad es: ${humedad}%`

        const descripcionInfo = document.createElement('p')
        descripcionInfo.textContent =  `La descripción meteorológica es: ${descripcion}`

        const iconoInfo = document.createElement('img')
        iconoInfo.src= `https://openweathermap.org/img/wn/10d@2x.png`

         divDatosClima.appendChild(ciudadTitulo)
         divDatosClima.appendChild(temperaturaInfo)
         divDatosClima.appendChild(humedadInfo)
         divDatosClima.appendChild(descripcionInfo)
         divDatosClima.appendChild(iconoInfo)


         }
