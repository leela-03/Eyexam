import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  TouchableOpacity,
  Image,
  ImageBackground,
  Dimensions
} from "react-native";

export default class ResultScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
            <SafeAreaView style={styles.droidSafeArea} />
            <ImageBackground source={require('../assets/bgimg.jpg')} style={styles.backgroundImage}>
            <Text style={styles.titleText}> Result </Text>

            <TouchableOpacity style={styles.button}
             onPress={() =>   this.props.navigation.navigate("Home")}
            >
            <Text style={styles.buttonText}>Back to home</Text>
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
    titleText: {
        alignItems:"center",
        fontSize: 40,
        fontWeight: "bold",
        color: "black",
        marginLeft:130,
        marginTop:100,
    },
    button: {
        justifyContent: 'center',
        alignSelf: 'center',
        borderWidth: 1,
        borderRadius: 15,
        marginTop: 500,
        width: 200,
        height: 50,
        paddingLeft:50,
        backgroundColor: "#AFEEEE"
      },
})