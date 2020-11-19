import React, {Component} from 'react';
import Character from '../Components/Characters';
import apiResponse from '../api';
import Form from '../Components/Form'
import DisplayData from '../Components/DisplayData'

class CharactersContainer extends Component{
    
    constructor(){
        super()
        this.state ={
            api: apiResponse
        }
    }
    renderCharacters=()=>{
        return this.state.api.map((el) => <Character key={el.id} character={el}/>)
    }
    render(){
        return(
            <div>
                <h1>Index</h1>
                {this.renderCharacters()}
            </div>
        )
    }
}

export default CharactersContainer;