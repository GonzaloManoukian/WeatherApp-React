import React from 'react'
import AppFrame from './AppFrame'
import { BrowserRouter as Router } from 'react-router-dom'

export default {
    title: "AppFrame",
    component: AppFrame
}

export const AppFrameExample = () => (
    <Router>
        <AppFrame>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia soluta aliquid nemo? Animi praesentium tenetur accusamus repudiandae rem. Maiores nihil corporis consequuntur eos tempora ex atque consectetur praesentium illo earum.
        </AppFrame>
    </Router>
)