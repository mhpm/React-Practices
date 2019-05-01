import React from 'react'

const WeatherResults = props => {
  return (
    <div className="mx-auto" style={{ width: 83 + '%' }}>
      {props.country && (
        <p className="text-main-light">
          Location: <span className="text-custom-gray"> {props.country}</span>
        </p>
      )}
    </div>
  )
}

export default WeatherResults
