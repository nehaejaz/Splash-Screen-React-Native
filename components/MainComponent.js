import React, {Component} from 'react'
import Splash from './Splash'
import Login from './Login'
import SplashScreen from 'react-native-splash-screen'


class MainComponent extends Component {

    componentDidMount() {
      SplashScreen.hide();
    }
    constructor(props){
        super(props);
        this.state={
            currentScreen:"splash",
        };
//         setTimeout(()=>{
// console.log("3 sec tasks")
// this.setState({currentScreen:"login"})
//         },3000)

    }
    render(){
        // const {currentScreen} = this.state  
        // let mainScreen= currentScreen==="splash" ? <Splash /> : <Login/>
        // return mainScreen
        return(
<Login />
        )
        
    }
}

export default MainComponent
