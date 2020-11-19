import React, {Component} from 'react';

class Form extends Component{
    
    constructor(){
        super()
        this.state = {
            name: " ",
            show: " ",
            img: " "
        }
    }

    render(){
        return(
            <div>
                <form
                onSubmit={(event) =>{
                    event.preventDefault();
                    this.props.handleChange(event)
                }}
                onChange={event => this.props.handleChange(event)}>
                    <label>
                        Name:
                    <input
                    type="text"
                    name="name"
                    value={this.name}
                    
                    >
                    </input>
                    </label>
                    <label>
                        Image URL:
                    <input
                    type="text"
                    name="img"
                    value={this.img}
                    
                    >
                    </input>
                    </label>
                    <label>
                        Show:
                    <input
                    type="text"
                    name="show"
                    value={this.show}
                    >
                    </input>
                    </label>
                    <button type="submit">
                        Submit Character
                    </button>
                </form>
            </div>
        )
    }
};

export default Form;
