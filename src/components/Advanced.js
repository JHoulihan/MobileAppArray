import React, { Component } from "react";
import ReactAudioPlayer from "react-audio-player";
class Advanced extends Component {
  render() {
    //this const declaration connects this Beginner class to the App class. It is the way to pass the//
    //apiDataBeginner state to call the map function on it from within this component//
    const mapAdvanced = this.props.mapObjectAdvanced;
    const onPick = this.props.pickAdvanced;
    const childCheckButton = this.props.childCheckButton;

    return (
      <div className="card-deck">
        {mapAdvanced.map((person) => (
          <div className="card text-center">
            <img
              className="card-img-top"
              alt="yogapic"
              src={person.imgURL}
              key={person.id}
            />
            <div class="card-body d-flex flex-column">
              <h3 className="card-title">{person.body_part}</h3>
              <h5 className="car-title">{person.position}</h5>
              <p className="card-text">{person.description}</p>
              <div className="mt-auto">
              <ReactAudioPlayer  src={person.audio} autoplay controls />
              <button
                className="btn btn-primary btn-lg btn-block"
                disabled={childCheckButton(person.id) && true}
                onClick={() => onPick(person.id)}
                type="button"
              >
                {childCheckButton(person.id) ? "Stretch Added" : "Add"}
              </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Advanced;