import React from 'react'
import WelcomeScreen from '../components/WelcomeScreen'
import { Link as RouterLink } from 'react-router-dom'
import { Grid, Typography, Link } from '@material-ui/core'
import { IconContext } from 'react-icons'
import { WiRain } from 'react-icons/wi'

const NotFoundPage = () => {
    return (
        <Grid container direction="column" justifyContent="center" alignItems="center" className="full">
        <Grid item container justifyContent="center" alignItems="center" className="highlight">
            <Grid item container xs={12} justifyContent="center" alignItems="center">
                <Grid item>
                            <IconContext.Provider value={{size: "6em"}}>
                                <WiRain />
                            </IconContext.Provider>
                        </Grid>
                        <Grid item container direction="column" justifyContent="center" alignItems="center">
                            <Typography variant="h4" color="inherit">
                                404 <br /> La pagina no existe
                            </Typography>
                            <Link color="inherit" aria-label="menu" component={RouterLink} to="/main">
                                Volver al inicio
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
    )
}

export default NotFoundPage
