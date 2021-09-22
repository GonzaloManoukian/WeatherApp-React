import React from 'react'
import { useHistory } from 'react-router'
import CityList from './../components/CityList'
import AppFrame from '../components/AppFrame/AppFrame'

const cities = [
    { city: "Buenos Aires", country: "Argentina", countryCode: "AR" },
    { city: "Bogota", country: "Colombia", countryCode: "CO" },
    { city: "Madrid", country: "España", countryCode: "ES" },
    { city: "Ciudad de Mexico", country: "Mexico", countryCode: "MX" }
]

const MainPage = () => {
    const history = useHistory()

    const onClickHandler = (city, countryCode) => {
        console.log(`city`, city)
        console.log(`countryCode`, countryCode)
        
        history.push(`/city/${countryCode}/${city}`)
    }

    return (
        <AppFrame>
            {/* <Paper elevation={3}> */}
                <CityList cities={cities} onClickCity={onClickHandler} />
            {/* </Paper> */}
        </AppFrame>
    )
}

export default MainPage
