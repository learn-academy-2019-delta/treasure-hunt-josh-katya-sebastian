import React, {Component} from 'react';
import Square from '../components/square'


 export default class Board extends Component {
    constructor(props){
    super(props)
    this.state = {
        spaces: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        treasure: 4
    }
}
componentDidMount = () => {
    this.treasureLocation()
}

treasureLocation = () =>{
    let {spaces}=this.state
    let currentState = Math.floor(Math.random()*9)
    this.setState({treasure: currentState})
    // NEVER DO THIS AGAIN -- >this.setState({spaces:spaces[currentState]= "X"})
    console.log(this.state)
} 



render(){
       let {spaces} = this.state
     
       let storeIt = spaces.map((value,index) => {
           return <Square key = {index} value = { value }  index= {index}/>
       })
    
return(
    <div>
    <div id="board-styles"> {storeIt} </div>
    
    <button onClick={this.treasureLocation}></button>
    </div>
    );
 }
 }