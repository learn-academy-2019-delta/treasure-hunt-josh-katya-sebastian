import React, {Component} from 'react';
import Square from '../components/square'


export default class Board extends Component {
    constructor(props){
    super(props)
        this.state = {
        spaces: ['?', '?', '?', '?', '?', '?', '?', '?', '?'],
        treasure: Math.floor(Math.random()*9),
        bomb:Math.floor(Math.random()*9),
        counter:5,
        baseState: this.baseState
        }
        
        
    }
    
    copyState = ()=>{
        const state = {
            
        }
        return this.state.baseState
    }
treasure = () =>{
    let arr = this.state.spaces
    let num = 
    console.log(num)
    this.setState({treasure:num})
    if(this.setState.treasure === this.setState.bomb){
        num += 1
    }
}
bomb = () =>{
    let arr = this.state.spaces
    let num1 = 
    console.log(num1)
    this.setState({bomb:num1})
    
}
handleClick = (squareIndex) =>{
    let arr = this.state.spaces
    arr[squareIndex] = 'tree'
        if(this.state.counter < 1){
            alert('Loser')
            this.reset()
        }
    let counter = this.state.counter -1
    this.setState({counter:counter})
    
    this.setState({spaces:arr})
    if(this.state.treasure == squareIndex){
        arr[squareIndex] = 'treasure'
        alert('winner')
        this.reset()
    }
    this.setState({spaces:arr})
    if(this.state.bomb == squareIndex){
        arr[squareIndex] = 'bomb'
        alert("You blew up!!")
        
    }
    

    
}
reset = () =>{
 this.setState(this.copyState())
  console.log('Reset')
}

render(){
    let square = this.state.spaces.map((value, index)=>{
        return(
            <Square
                key ={index}
                index ={index}
                value={value}
                handleClick={this.handleClick}
                />
            )
    })
        return(
            <div style ={{textAlign:'center'}}>
                <div className = 'board-styles'>
                  {square}
                </div>
                <button onClick = {this.reset}>Reset game</button>
                <div>
                <button onClick={this.state.counter}>{this.state.counter}</button>
                </div>
            </div>
            )
}
}