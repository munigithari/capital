import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]


class Capitals extends Component {
  state = {activeDetails : countryAndCapitalsList[0].id}

  setCountryAndCapitalsList = event => {
    this.setState({activeDetails : event.target.value})
  }

  getCountry = () => {
    const {activeDetails} = this.state
    const countryAndCapital = countryAndCapitalsList.find(eachItem => eachItem.id === activeDetails)
    return countryAndCapital.country
  }
  
  render() {
    const {activeDetails} = this.state 
    const country = this.getCountry(activeDetails)

    return (
      <div className = "bg-container">
          <div className = "middle-container">
               <h1 className = "heading">Countries And Capitals</h1>
               <div className = "container1">
                 <select className = "capital-select" onChange = {this.setCountryAndCapitalsList} value = {capitalDisplayText}>
                  {countryAndCapitalsList.map(eachItem => (
                    <option className = "option" key = {eachItem.id} value = {eachItem.id}>
                      {eachItem.capitalDisplayText}
                    </option>
                  ))}
                 </select>
                 <p className = "paragraph">is capital of which country?</p>
               </div>
               <p className = "paragraph">{country}</p>
          </div>
      </div>
    )
  }
}

export default Capitals