import React, {Component} from 'react'
import {StyleSheet, Text ,TextInput, View,Image,SafeAreaView} from 'react-native'

class Login extends Component{
    render(){
        return(
        <SafeAreaView style={styles.container}>
          <View style={styles.container}>
            <View style={styles.logoConatiner}>
            <Image style={styles.logo} source={require('../images/ebay.png')} />
            <Text style={styles.title}>Account Information</Text>
            </View>
            <View style={styles.infoContainer}>
                <Text>Enter Email</Text>
            <TextInput style={styles.input}></TextInput>
            </View>
        </View>
        </SafeAreaView>
       
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
    logoConatiner: {
        alignItems:'center',
        justifyContent:'center',
        flex:1
    },
    logo: {
        width:128,
        height:56
    },
    title: {
         fontWeight:"bold",
         color:"blue",
         marginTop:5,
    },
    infoContainer: {
        position:'absolute',
        left:0,
        right:0,
        bottom:0,
        height:200,
        padding:20
    },
    input: {
        height:40,
        backgroundColor:'grey',
    }

})

export default Login