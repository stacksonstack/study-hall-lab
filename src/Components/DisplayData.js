import React, {Component} from 'react';

class DisplayData extends Component {
  render() {
    return (
        <div>
        <h3>Name: {this.props.formData.name}</h3>
        <b>
          <p>Show: {this.props.formData.show}</p>
        </b>
        <img alt="character" src={this.props.formData.img}></img>
      </div>
    )
  }
}

export default DisplayData;