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

export default class AlphabetScreen extends Component {
    
    constructor(){
        super();  
        this.pressed = false; 
        this.state={
          text : 'Round 1',
        }
      }

      makeid=()=> {
        if(!this.pressed){
          this.pressed = true;
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      
        for (var i = 0; i < 5; i++)
          text += possible.charAt(Math.floor(Math.random() * possible.length));
        this.setState({text : text}) 
      }
    }


    render() {
        return (
            <View style={styles.container}>
            <SafeAreaView style={styles.droidSafeArea} />
            <ImageBackground source={require('../assets/bgimg.jpg')} style={styles.backgroundImage}>
            <Text style={styles.display}>{this.state.text}</Text>

            <TouchableOpacity style={styles.button}
             onPress={() =>  this.makeid()}

            >
            <Text style={styles.buttonText}>Start</Text>
           </TouchableOpacity>

           <TouchableOpacity style={styles.button1}
             onPress={() =>   this.props.navigation.navigate("Atest1")}
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
        fontSize:120,
        marginTop:300,
    }
  });