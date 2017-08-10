import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {
  constructor(props){
    super(props)

  }

  adoptPet = (id) =>{
    this.props.onAdoptPet(id)
  }
  render() {
    console.log(this.props.adoptedPets)
    const pets = this.props.pets.map((pet, index)=>{
      return (
        <Pet pet={pet} key={index} isAdopted={(this.props.adoptedPets.includes(pet.id))? true : false} onAdoptPet={this.adoptPet}/>
      )
    })
    return (
      <div className="ui cards">
        { pets }
      </div>
    );
  }
}

export default PetBrowser;
