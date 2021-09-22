import React, { useState, useEffect } from 'react'
import axios from 'axios'
import moment from 'moment'
import convertUnits from 'convert-units'
import 'moment/locale/es'
import { useParams } from 'react-router'
import { Grid } from '@material-ui/core'
import AppFrame from '../components/AppFrame/AppFrame'
import CityInfo from '../components/CityInfo'
import Weather from '../components/Weather'
import WeatherDetails from '../components/WeatherDetails'
import Forecast from '../components/Forecast'
import ForecastChart from '../components/ForecastChart'

const CityPage = () => {

    const [data, setData] = useState(null)
    const [forecastItemList, setForecastItemList] = useState(null)

    const { city, countryCode } = useParams()

    useEffect(async () => {

        const getForecast = async () => {
            const appid = process.env.REACT_APP_WEATHER_API_KEY;
            const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&appid=${appid}`

            try {
                const { data } = await axios.get(url)

                const toCelsius = (temp) => convertUnits(temp).from("K").to("C").toFixed("1")
                const daysAhead = [0, 1, 2, 3, 4, 5]
                const days = daysAhead.map(d => moment().add(d, "d"))
                const dataAux = days.map(day => {

                    const tempObjArray = data.list.filter(item => {
                        const dayOfYear = moment.unix(item.dt).dayOfYear()
                        return dayOfYear === day.dayOfYear()
                    })

                    const temps = tempObjArray.map(item => item.main.temp)

                    return({
                        dayHour: day.format('ddd'),
                        min: toCelsius(Math.min(...temps)),
                        max: toCelsius(Math.max(...temps))
                    })
                })
                setData(dataAux)
                const interval = [4, 8, 12, 16, 20, 24]
                const forecastItemListAux = data.list
                    .filter((item, index) => interval.includes(index))
                    .map(item => {
                        return ({
                            hour: moment.unix(item.dt).hour(),
                            weekDay: moment.unix(item.dt).format("dddd"),
                            state: item.weather[0].main.toLowerCase(),
                            temperature: toCelsius(item.main.temp)
                        })
                    })

                setForecastItemList(forecastItemListAux)
            } catch (error) {
                console.log(error);
            }
        }

        getForecast()
    }, [city, countryCode])

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
                        data && <ForecastChart data={data} /> //Antes del useEffect, data y forecastItemList son nulos
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
