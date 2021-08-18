import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Platform,
    StatusBar,
    ImageBackground,
    Image
} from "react-native";

export default class Ntest1Screen extends Component {
    
    constructor(){
        super();  
        this.pressed = false; 
        this.state={
          number : 'Round 2',
        }
      }

      makeid=()=> {
        if(!this.pressed){
          this.pressed = true;
        var number = "";
        var possible = "0123456789";
      
        for (var i = 0; i < 5; i++)
          number += possible.charAt(Math.floor(Math.random() * possible.length));
        this.setState({number : number}) 
      }
    }


    render() {
        return (
            <View style={styles.container}>
            <SafeAreaView style={styles.droidSafeArea} />
            <ImageBackground source={require('../assets/bgimg.jpg')} style={styles.backgroundImage}>
            <Text style={styles.display}>{this.state.number}</Text>

            <TouchableOpacity style={styles.button}
             onPress={() =>  this.makeid()}

            >
            <Text style={styles.buttonText}>Start</Text>
           </TouchableOpacity>

           <TouchableOpacity style={styles.button1}
             onPress={() =>   this.props.navigation.navigate("Ntest2")}
            >
            <Text style={styles.buttonText}>Next</Text>
           </TouchableOpacity>
           </ImageBackground>
        </View>
     
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    button: {
      justifyContent: 'center',
      alignSelf: 'center',
      borderWidth: 1,
      borderRadius: 15,
      marginTop: 200,
      width: 200,
      height: 50,
      backgroundColor: "#AFEEEE"
    },
    button1: {
      justifyContent: 'center',
      alignSelf: 'center',
      borderWidth: 1,
      borderRadius: 15,
      marginTop: 20,
      width: 200,
      height: 50,
      backgroundColor: "#AFEEEE"
    },
    buttonText: {
      textAlign: 'center',
      color: 'black',
    },
    display:{
        textAlign: 'center',
        justifyContent: 'center',
        color: 'black',
        fontSize:60,
        marginTop:300,
    }
  });