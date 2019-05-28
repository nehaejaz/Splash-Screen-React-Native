/**
 * @format
 */
import React, {Component} from 'react'
import {AppRegistry} from 'react-native';
import Splash from './components/Splash';
import {name as appName} from './app.json';
import Login from './components/Login';
import MainComponent from './components/MainComponent'
// import. console = require('console');

// class MainComponent extends Component {
//     constructor(props){
//         super(props);
//         this.state={
//             currentScreen:"splash",
//         };
//         setTimeout(()=>{
// console.log("3 sec tasks")
// this.setState({currentScreen:"login"})
//         },3000)
//     }
//     render(){
//         const {currentScreen} = this.state  
//         let mainScreen= currentScreen==="splash" ? <Splash /> : <Login/>
//         return mainScreen
//     }
// }
AppRegistry.registerComponent(appName, () => MainComponent);
