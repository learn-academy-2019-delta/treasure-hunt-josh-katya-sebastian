import React, {Component} from 'react';
import '../App.css'



export default class Square extends Component {

    handleClick = () => {
        console.log(this.props.index);
        console.log(this.props.value);
    }
    
    render(){
        return (
            <div> 
                <button id = "square-styles" onClick={this.handleClick}> ? </button>
            </div>
            )
    }
}