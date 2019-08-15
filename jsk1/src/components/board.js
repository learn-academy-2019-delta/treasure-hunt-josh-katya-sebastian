import React, {Component} from 'react';
import Square from '../components/square'


export default class Board extends Component {
    constructor(props){
    super(props)
        this.state = {
        spaces: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        treasure: 0,
        bomb: 0
        }
        
    }
// componentDidMount = () => {
//     this.treasureLocation()
// }

treasureLocation = () =>{

    let currentState = Math.floor(Math.random()*9)
    this.setState({treasure: currentState})
        if(currentState === this.state.bomb){
        currentState += 1
        }
}

bombLocation = () => {
    let bombArea = Math.floor(Math.random()*9)
    this.setState({bomb: bombArea })
   
}  





render(){
       let {spaces} = this.state
     
       let storeIt = spaces.map((value,index) => {
           return ( <Square
           key = {index} 
           value = { value } 
           index= {index}
           foo = {this.props.clicking}
           treasure = {this.state.treasure}
           bomb = {this.state.bomb}
           />
          )
       })
       
       
    
return(
    <div>
    <div id="board-styles"> {storeIt} </div>
    
    </div>
    );
 }
 }