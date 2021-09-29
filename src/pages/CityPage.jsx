import React, { useMemo } from 'react'
import 'moment/locale/es'
import { Grid, LinearProgress } from '@material-ui/core'
import useCityPage from '../hooks/useCitypage'
import useCityList from '../hooks/useCityList'
import AppFrame from '../components/AppFrame/AppFrame'
import CityInfo from '../components/CityInfo'
import Weather from '../components/Weather'
import WeatherDetails from '../components/WeatherDetails'
import Forecast from '../components/Forecast'
import ForecastChart from '../components/ForecastChart'
import { getCityCode } from '../utils/utils'
import { getCountryNameByCountryCode } from '../utils/serviceCity'

const CityPage = () => {

    const { city, countryCode, chartData, forecastItemList } = useCityPage()

    const cities = useMemo(() => ([{ city, countryCode }]), [city, countryCode])
    const { allWeather } = useCityList(cities)

    const weather = allWeather[getCityCode(city, countryCode)]

    const country = getCountryNameByCountryCode(countryCode)
    const state = weather && weather.state
    const temperature = weather && weather.temperature
    const humidity = weather && weather.humidity
    const wind = weather && weather.wind

    return (
        <AppFrame>
            <Grid container justifyContent="space-around" direction="column" spacing={2}>
                <Grid item container justifyContent="center" alignItems="flex-end" xs={12}>
                    <CityInfo city={city} country={country} />
                </Grid>
                <Grid container item xs={12} justifyContent="center">
                    <Weather state={state} temperature={temperature} />
                    {
                        humidity && wind && <WeatherDetails humidity={humidity} wind={wind} />
                    }
                </Grid>
                <Grid item>
                    {
                        !chartData && !forecastItemList && <LinearProgress />
                    }
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
