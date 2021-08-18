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

export default class RightScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <ImageBackground source={require('../assets/bgimg.jpg')} style={styles.backgroundImage}>
                    <View style={styles.titleBar}>
                     
                        <Text style={styles.titleText}>{`Right Eye Check\nChoose Any One`}</Text>
                    </View>

                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("Alphabet")
                    }>
                        <Text style={styles.routeText}>A</Text>
                        <Text style={styles.clickHere}>{"Alphabets --->"}</Text>
                       
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCardN} onPress={() =>
                        this.props.navigation.navigate("Number")
                    }>
                        <Text style={styles.routeText}>1</Text>
                        <Text style={styles.clickHere}>{"Numbers --->"}</Text>
                      
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCardS} onPress={() =>
                        this.props.navigation.navigate("SS")
                    }>
                        <Text style={styles.routeText}>$</Text>
                        <Text style={styles.clickHere}>{"Symbols --->"}</Text>
                       
                    </TouchableOpacity>

                    <Text style={styles.disclaimerText}>Note: Cover Your Left Eye</Text>

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
        flex: 0.20,
        height: 50,
        width:150,
        marginLeft: 30,
        marginRight: 50,
        top: 100,
        bottom:0,
        borderRadius: 30,
        backgroundColor: 'white'
    },
    routeCardN: {
        flex: 0.20,
        height: 30,
        width:150,
        marginLeft: 220,
        marginRight: 50,
        marginTop: 70,
        bottom:113,
        borderRadius: 30,
        backgroundColor: 'white'
    },
    routeCardS: {
        flex: 0.20,
        height: 50,
        width:150,
        marginLeft: 30,
        marginRight: 50,
        marginTop: 50,
        bottom:120,
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
        color: "black",
        marginTop: 100,
    },
    routeText: {
        fontSize: 55,
        fontWeight: "bold",
        color: "black",
        marginTop: 35,
        paddingLeft: 60
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

    disclaimerText: {
        fontSize:20,
        marginLeft:20,
        color: "black",
       
    },
});