import React, {Component} from 'react'
import {StyleSheet, Text , View} from 'react-native'

class Splash extends Component{
    render(){
        return(
            <View style={styles.container}>
            <Text style={styles.title}>Hello</Text>
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