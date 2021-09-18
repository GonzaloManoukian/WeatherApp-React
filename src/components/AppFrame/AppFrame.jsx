import React, { Children } from 'react'
import PropTypes from 'prop-types'
import { Grid, AppBar, Toolbar, IconButton, Link, Typography } from '@material-ui/core'
import { IconContext } from 'react-icons'
import { WiDaySunny } from 'react-icons/wi'
import { Link as LinkRouter } from 'react-router-dom'

const AppFrame = ({ children }) => {
    return (
        <Grid container justifyContent="center">
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Link to="/main" component={LinkRouter} color="inherit" aria-label="menu">
                        <Grid item container direction="row" justifyContent="center" alignItems="center">
                            <IconButton color="inherit" aria-label="menu">
                                <IconContext.Provider value={{ size: "2em" }}>
                                    <WiDaySunny></WiDaySunny>
                                </IconContext.Provider>
                                <Typography variant="h6" color="inherit">
                                    Wheater App
                                </Typography>
                            </IconButton>
                        </Grid>
                    </Link>
                </Toolbar>
            </AppBar>
            <Grid item xs={12} sm={11} md={10} lg={8}>
                {children}
            </Grid>
        </Grid>
    )
}

AppFrame.propTypes = {
    children: PropTypes.node
}

export default AppFrame
