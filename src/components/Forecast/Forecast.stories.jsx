import React from 'react'
import Forecast from './Forecast'

export default {
    title: "Forecast",
    component: Forecast
}

const forecastItemList = [
    {hour: 18, state: "clear", temperature: 17, weekDay: "Jueves"},
    {hour: 17, state: "clouds", temperature: 18, weekDay: "Viernes"},
    {hour: 13, state: "drizzle", temperature: 16, weekDay: "Sabado"},
    {hour: 12, state: "clouds", temperature: 14, weekDay: "Domingo"},
    {hour: 14, state: "rain", temperature: 13, weekDay: "Lunes"},
]

export const ForecastExample = () => (<Forecast forecastItemList={forecastItemList} />)