import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './components/board';
import Header from './components/header';

class App extends Component {
  constructor(props){
    super(props)
  } 

 render(){
   return (
     <div>
     <Header />
     <Board />
    
     </div>
     
     
  
     );
 }
 }


export default App;
