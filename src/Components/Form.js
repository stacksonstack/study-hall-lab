import React, {Component} from 'react';

class Form extends Component{
    render(){
        return(
            <div>
                <form>
                    <input
                    type="text"
                    name="name"
                    value={this.props.formData.name}>
                    </input>
                    <input
                    type="text"
                    name="img"
                    value={this.props.formData.img}>
                    </input>
                    <input
                    type="text"
                    name="show"
                    value={this.props.formData.show}>
                    </input>

                </form>
            </div>
        )
    }
}