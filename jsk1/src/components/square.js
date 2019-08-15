import React, {Component} from 'react';
import '../App.css'




export default class Square extends Component {

    // handleClick = () => {
    // // alert(this.props.index)
    // const {index} = this.props
    // this.props.foo(index)
    // }
    
    clicking = (index) =>{
    const {treasure, bomb, spaces}= this.props
 if(index === bomb){
     spaces[index] = 'Boom'
    
     } else if (index === treasure) {
         spaces[index] = 'Win'
        
     } 
    // else {
    //      spaces[index] = 'T'
        
    //  }
    }

    render(){
       // const {value, index} = this.props
        return (
            <div> 
                <button id = "square-styles" onClick={this.clicking}> Hello </button>
                
            </div>
            )
    }
}