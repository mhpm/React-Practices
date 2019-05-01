import React, { Component } from 'react'
import WeatherForm from './WeatherForm'
import WeatherResults from './WeatherResults'
import './Weather.css'

const API_KEY = '0c65f0fb9d10701d6380302f8261b0f5'

class Weather extends Component {
  state = {
    weather: {
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined
    },
    isLoading: false
  }

  getWeather = async e => {
    e.preventDefault()
    this.setState({
      weather: {
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined
      },
      isLoading: true
    })

    const city = e.target.elements.city.value
    const country = e.target.elements.country.value

    await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
    )
      .then(res => res.json())
      .then(data => {
        console.log(data)
        this.setState({
          weather: {
            temperature: data.main.temp,
            city: data.sys.country,
            country: data.name,
            humidity: data.main.humidity,
            description: data.weather[0].description
          }
        })
      })
      .catch(error => {
        console.error('Error:', error)
        this.setState({ error: true })
      })
    this.setState({ isLoading: false })
  }

  render() {
    return (
      <div className="wrap">
        <div className="row">
          <div className="col-md-5">
            <div className="bg-img" />
          </div>
          <div className="col-md">
            <WeatherForm
              getWeather={this.getWeather}
              isLoading={this.state.isLoading}
            />
            <WeatherResults {...this.state.weather} />
          </div>
        </div>
      </div>
    )
  }
}

export default Weather
