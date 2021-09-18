import React from 'react'
import { render } from '@testing-library/react'
import ForecastItem from './ForecastItem'

test("ForecastItem render", async () => {
    //Se deben renderizar los diferentes textos
    const { findByText } = render(<ForecastItem weekDay="Lunes" hour={10} state="clear" temperature={23}/>)

    const weekDay = await findByText("Lunes")
    const hour = await findByText(/10/)
    const temperature = await findByText(/23/)

    expect(weekDay).toHaveTextContent("Lunes")
    expect(hour).toHaveTextContent("10")
    expect(temperature).toHaveTextContent("23º")
})