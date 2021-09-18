import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import convertUnits from 'convert-units'
import { Grid, List, ListItem } from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import CityInfo from './../CityInfo'
import Weather from './../Weather'

const getCityCode = (city, countryCode) => `${city}${countryCode}`

//renderCityAndCountry es una funcion que retorna otra funcion
const renderCityAndCountry = eventOnClickCity => (cityAndCountry, weather) => {
    const { city, country, countryCode } = cityAndCountry

    return (
        <ListItem button
            key={getCityCode(city, countryCode)} onClick={eventOnClickCity}>
            <Grid container justifyContent="center" alignItems="center">
                <Grid item md={9} xs={12}>
                    <CityInfo city={city} country={country} />
                </Grid>
                <Grid item md={3} xs={12}>
                    <Weather temperature={weather && weather.temperature} state={weather && weather.state} />
                </Grid>
            </Grid>
        </ListItem>
    )
}

const CityList = ({ cities, onClickCity }) => {
    const [allWeather, setAllWeather] = useState({})
    const [error, setError] = useState(null)

    useEffect(() => {
        const setWeather = async (city, countryCode) => {
            const appid = process.env.REACT_APP_WEATHER_API_KEY;
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${appid}`
            
            try {
                const response = await axios.get(url)
    
                const { data } = response
                const temperature = Number(convertUnits(data.main.temp).from("K").to("C").toFixed("1"))
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

    return (
        <div>
            {
                error && <Alert severity="error" onClose={() => {setError(null)}}>{error}</Alert> 
            }
            <List>
                {
                    cities.map(cityAndCountry => renderCityAndCountry(onClickCity)(cityAndCountry, allWeather[getCityCode(cityAndCountry.city, cityAndCountry.countryCode)]))
                }
            </List>
        </div>
    )
}

CityList.propTypes = {
    cities: PropTypes.arrayOf(
        PropTypes.shape({
            city: PropTypes.string.isRequired,
            country: PropTypes.string.isRequired,
            countryCode: PropTypes.string.isRequired
        })).isRequired,
    onClickCity: PropTypes.func.isRequired,
}

export default CityList
