import React, {Component} from 'react';
import '../App.css'
import Board from '../components/board'



export default class Square extends Component {

    handle = () =>{
        this.props.handleClick(this.props.index)
    }
    

    render(){
       let {value, index} = this.props
        return (
            <div> 
                <button className = "square-styles" onClick={this.handle}> {value} </button>
                
            </div>
            )
            
    }
}