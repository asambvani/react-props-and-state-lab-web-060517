import React from 'react';

class Pet extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.isAdopted)
  }

  handleAdopt = (e) =>{
    e.preventDefault()
    this.props.onAdoptPet(this.props.pet.id)
  }
  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">{this.props.pet.name} ({(this.props.pet.gender==="male")? '♂' : '♀'})</a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          <button className="ui primary button" onClick={this.handleAdopt} style={{display: `${this.props.isAdopted ? 'none' : 'inline'}`} }>Adopt pet</button>
          <button className="ui disabled button" style={{display: `${this.props.isAdopted ? 'inline' : 'none'}`}}>Already adopted</button>
        </div>
      </div>
    );
  }
}

export default Pet;
