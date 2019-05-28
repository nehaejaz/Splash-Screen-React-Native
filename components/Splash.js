import React, {Component} from 'react'
import {StyleSheet, Text , View} from 'react-native'

class Splash extends Component{
    constructor(props){
        super(props)
        this.state={
            timer: 0
        }
        setInterval(()=>{
            this.setState({timer: this.state.timer + 1})
        },1000)
    }
    render(){
        return(
            <View style={styles.container}>
            <Text style={styles.title}>Hello{this.state.timer}</Text>
            </View>
        )
    }
}

const styles= StyleSheet.create({
    container: {
        backgroundColor:"yellow",
        flex:1,
        alignItems:'center',
        justifyContent: 'center',
    },
    title: {
         fontWeight:"bold",
         color:"blue",
    }
})

export default Splash