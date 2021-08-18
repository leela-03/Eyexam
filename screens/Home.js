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

export default class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <ImageBackground source={require('../assets/bgimg.jpg')} style={styles.backgroundImage}>
                    <View style={styles.titleBar}>
                     
                        <Text style={styles.titleText}>EYEXAM</Text>
                    </View>

                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("RightEye")
                    }>
                        <Text style={styles.routeText}>RIGHT EYE</Text>
                        <Text style={styles.clickHere}>{"Click here --->"}</Text>
                        <Image source={require("../assets/lefteye.jpg")} style={styles.iconImage}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("LeftEye")
                    }>
                        <Text style={styles.routeText}>LEFT EYE</Text>
                        <Text style={styles.clickHere}>{"Click here --->"}</Text>
                        <Image source={require("../assets/righteye.jpg")} style={styles.iconImage}></Image>
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
    routeCard: {
        flex: 0.25,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 50,
        borderRadius: 30,
        backgroundColor: 'white'
    },
    titleBar: {
        flex: 0.15,
        justifyContent: "center",
        alignItems: "center"
    },
    titleText: {
        fontSize: 40,
        fontWeight: "bold",
        color: "black"
    },
    routeText: {
        fontSize: 35,
        fontWeight: "bold",
        color: "black",
        marginTop: 75,
        paddingLeft: 30
    },
    clickHere: {
        paddingLeft: 30,
        color: "#AFEEEE",
        fontSize: 15
    },
    iconImage: {
        position: "absolute",
        height: 100,
        width: 100,
        resizeMode: "contain",
        right: 10,
        top: 40
    },
});