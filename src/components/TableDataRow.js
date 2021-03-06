import React from 'react'

export default function TableDataRow(props) {
    return(
        props.sortedCarData().map(carInfo => {
            return (
                <tr key={carInfo.id}>
                    <td>{carInfo.vehicle_year}</td>
                    <td>{carInfo.make}</td>
                    <td>{carInfo.vehicle_model}</td>
                    <td>{carInfo.displacement}</td>
                    <td>{carInfo.cylinders}</td>
                    <td>{carInfo.class}</td>
                </tr>
            )
        })
    )
}
