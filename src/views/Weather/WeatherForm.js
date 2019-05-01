import React, { Component } from 'react'
import Loading from '../../components/Loading'

class WeatherForm extends Component {
  state = {
    city: '',
    country: '',
    disabled: true
  }

  handleChange = async ({ target }) => {
    await this.setState({ [target.id]: target.value })

    if (this.state.city !== '' && this.state.country !== '')
      this.setState({ disabled: false })
    else if (this.state.city === '' || this.state.country === '')
      this.setState({ disabled: true })
  }

  render() {
    return (
      <div className="row">
        <div className="col-md">
          <div className="mx-auto mt-4" style={{ width: 82 + '%' }}>
            <form className="form-inline" onSubmit={this.props.getWeather}>
              <input
                className="form-control mr-3 text-main"
                onChange={this.handleChange}
                type="text"
                id="city"
              />
              <input
                className="form-control mr-3 text-main"
                onChange={this.handleChange}
                type="text"
                id="country"
              />

              <input
                type="submit"
                disabled={this.state.disabled}
                className="btn btn-raised bg-main text-white"
                value="Get Weather"
              />
            </form>
            {this.props.isLoading ? <Loading /> : <div />}
          </div>
        </div>
      </div>
    )
  }
}

export default WeatherForm
