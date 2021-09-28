import React from 'react'
import PropTypes from 'prop-types'
import { Grid, List, ListItem } from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import useCityList from '../../hooks/useCityList'
import CityInfo from './../CityInfo'
import Weather from './../Weather'
import { getCityCode } from '../../utils/utils'

//renderCityAndCountry es una funcion que retorna otra funcion
const renderCityAndCountry = eventOnClickCity => (cityAndCountry, weather) => {
    const { city, country, countryCode } = cityAndCountry

    return (
        <ListItem button
            key={getCityCode(city, countryCode)} 
            onClick={() => eventOnClickCity(city, countryCode)} >
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

    const {allWeather, error, setError} = useCityList(cities)

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
