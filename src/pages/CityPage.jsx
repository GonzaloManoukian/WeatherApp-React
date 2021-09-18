import React from 'react'
import { Grid } from '@material-ui/core'
import AppFrame from '../components/AppFrame/AppFrame'
import CityInfo from '../components/CityInfo'
import Weather from '../components/Weather'
import WeatherDetails from '../components/WeatherDetails'
import Forecast from '../components/Forecast'
import ForecastChart from '../components/ForecastChart'

const dataExample = [
    {
        "dayHour": "Jue 18",
        "min": 14,
        "max": 22,
    },
    {
        "dayHour": "Vie 06",
        "min": 18,
        "max": 27,
    },
    {
        "dayHour": "Vie 12",
        "min": 18,
        "max": 28,
    },
    {
        "dayHour": "Vie 18",
        "min": 18,
        "max": 25,
    },
    {
        "dayHour": "Sab 06",
        "min": 15,
        "max": 22,
    },
    {
        "dayHour": "Sab 12",
        "min": 12,
        "max": 19,
    }
]

const forecastItemListExample = [
    { hour: 18, state: "sunny", temperature: 17, weekDay: "Jueves" },
    { hour: 17, state: "cloud", temperature: 18, weekDay: "Viernes" },
    { hour: 13, state: "fog", temperature: 16, weekDay: "Sabado" },
    { hour: 12, state: "cloudy", temperature: 14, weekDay: "Domingo" },
    { hour: 14, state: "rain", temperature: 13, weekDay: "Lunes" },
]

const CityPage = () => {

    const city = "Buenos Aires"
    const country = "Argentina"
    const state = "sunny"
    const temperature = 20
    const humidity = 80
    const wind = 5
    const data = dataExample
    const forecastItemList = forecastItemListExample

    return (
        <AppFrame>
            <Grid container justifyContent="space-around" direction="column" spacing={2}>
                <Grid item container justifyContent="center" alignItems="flex-end" xs={12}>
                    <CityInfo city={city} country={country} />
                </Grid>
                <Grid container item xs={12} justifyContent="center">
                    <Weather state={state} temperature={temperature} />
                    <WeatherDetails humidity={humidity} wind={wind} />
                </Grid>
                <Grid item xs={12}>
                    <ForecastChart data={data} />
                </Grid>
                <Grid item xs={12}>
                    <Forecast forecastItemList={forecastItemList} />
                </Grid>
            </Grid>
        </AppFrame>
    )
}


export default CityPage
