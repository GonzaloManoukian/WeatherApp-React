import { useState, useEffect } from 'react'
import axios from 'axios'
import { getCityCode, toCelsius } from '../utils/utils'
import { getWeatherUrl } from '../utils/url'



const useCityList = (cities) => {
    const [allWeather, setAllWeather] = useState({})
    const [error, setError] = useState(null)

    useEffect(() => {
        const setWeather = async (city, countryCode) => {
            const url = getWeatherUrl({city, countryCode})
            try {
                const response = await axios.get(url)
    
                const { data } = response
                const temperature = toCelsius(data.main.temp)
                const state = data.weather[0].main.toLowerCase()
    
                const propName = getCityCode(city, countryCode) // Ej: [Ciudad de Mexico-Mexico]
                const propValue = { temperature, state } // Ej: { temperature: 10, state: "sunny"}
                setAllWeather(allWeather => ({ ...allWeather, [propName]: propValue })) // Al utilizarlo de esta forma no es necesario agregarlo a dependencias    
            
            } catch (error) {
                if (error.response) { // Errores que nos responde el server 
                    setError("Ha ocurrido un error en el servidor. Intentelo nuevamente mas tarde");
                } else if (error.request) {// Errores que suceden por no llegar al server
                    setError("Verifique la conexión a Internet");
                } else { // Errores imprevistos
                    setError("Error al cargar los datos");
                }
            }
        }

        cities.forEach(({ city, countryCode }) => {
            setWeather(city, countryCode)
        });

    }, [cities])

    return {allWeather, error, setError}
}

export default useCityList