import React from 'react';

import Filters from './Filters';
import PetBrowser from './PetBrowser';
import { getAll } from '../data/pets';
const ALL_PETS = getAll();
const ADOPTED_PETS = [ALL_PETS[0].id]

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: ALL_PETS,
      adoptedPets: ADOPTED_PETS,
      filters: {
        type: 'all',
      }
    };
  }

  adoptPet = (id)=>{
    this.setState({
      adoptedPets: this.state.adoptedPets.concat([id])
    })
    console.log(this.state.adoptedPetss)
  }
  handleFilterChange = (e) =>{
    this.setState({
      filters: {
        type: e.target.value
      }
    })
  }
  handlePetsClick = () =>{
    let query=""
    console.log(this.state.filters.type)
    if(this.state.filters.type==='cat'){
      query='?type=cat'
    }else if(this.state.filters.type === 'dog'){
      query='?type=dog'
    }else if(this.state.filters.type === 'micropig'){
      query='?type=micropig'
    }

    fetch('/api/pets' + query).then((response)=>{
      return response.json()
    }).then((data)=>{
      this.setState({
        pets: data
      })
    })

  }
  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters filters={this.state.filters} onChangeType={this.handleFilterChange} onFindPetsClick={this.handlePetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets = {this.state.pets} adoptedPets={this.state.adoptedPets} onAdoptPet = {this.adoptPet}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
