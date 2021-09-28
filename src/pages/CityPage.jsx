import React from 'react'
import 'moment/locale/es'
import { Grid } from '@material-ui/core'
import useCityPage from '../hooks/useCitypage'
import AppFrame from '../components/AppFrame/AppFrame'
import CityInfo from '../components/CityInfo'
import Weather from '../components/Weather'
import WeatherDetails from '../components/WeatherDetails'
import Forecast from '../components/Forecast'
import ForecastChart from '../components/ForecastChart'

const CityPage = () => {

    const { city, chartData, forecastItemList } = useCityPage()

    const country = "Argentina"
    const state = "clear"
    const temperature = 20
    const humidity = 80
    const wind = 5
    //const data = dataExample
    //const forecastItemList = forecastItemListExample

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
                    {
                        chartData && <ForecastChart data={chartData} /> //Antes del useEffect, data y forecastItemList son nulos
                    }
                </Grid>
                <Grid item xs={12}>
                    {
                        forecastItemList && <Forecast forecastItemList={forecastItemList} />
                    }
                </Grid>
            </Grid>
        </AppFrame>
    )
}


export default CityPage
