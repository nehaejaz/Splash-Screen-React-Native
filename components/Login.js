import React, {Component} from 'react'
import {StyleSheet, Text ,TextInput, View,Image,SafeAreaView,TouchableOpacity} from 'react-native'

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
            <TextInput style={styles.input}
             placeholder="Enter Email"
             keyboardType="email-address"
             returnKeyType="next"
             autoCorrect={false}
             onSubmitEditing={()=> this.refs.passwordInput.focus()}
            ></TextInput>
            <TextInput style={styles.input}
             placeholder="password"
             returnKeyType="go"
             secureTextEntry={true}
             ref={"passwordInput"}
            ></TextInput>
            <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.buttonTitle}>Login</Text>
            </TouchableOpacity>
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
        // position:'absolute',
        // flex:1,
        // justifyContent:'center',
        // left:0,
        // right:0,
        // bottom:0,
        height:200,
        // padding:20,
        width:250,
        // backgroundColor:"pink"
        // backgroundColor:"blue",
        flex:1,
        alignItems:'center',
        justifyContent: 'center',
    },
    input: {
        height:40,
        backgroundColor:'white',
        marginTop:10,
        width:250,
    },
    buttonContainer:{
        backgroundColor: "red",
        marginTop:10,
        width:100,
        alignItems:"center",
        justifyContent:"center"
    },
    buttonTitle:{
        color:"white",
        fontWeight:"bold"
    }

})

export default Login