import React from 'react'
import CityList from './CityList'
import { action } from '@storybook/addon-actions'

export default {
    title: "CityList",
    component: CityList
}

const cities = [
    { city: "Buenos Aires", country: "Argentina"},
    { city: "Bogota", country: "Colombia"},
    { city: "Madrid", country: "España"},
    { city: "Ciudad de Mexico", country: "Mexico"}
]

export const CityListExample = () => <CityList cities={cities} onClickCity={action("Click en City")}/>