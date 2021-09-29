import React from 'react'
import { useHistory } from 'react-router'
import CityList from './../components/CityList'
import AppFrame from '../components/AppFrame/AppFrame'
import { getCities } from '../utils/serviceCity'

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
                <CityList cities={getCities()} onClickCity={onClickHandler} />
            {/* </Paper> */}
        </AppFrame>
    )
}

export default MainPage
