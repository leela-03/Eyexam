import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  ImageBackground,
  
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import firebase from "firebase";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile_image: "",
      name: ""
    };
  }

  componentDidMount() {
    this.fetchUser();
  }

  async fetchUser() {
    let  name, image;
    await firebase
      .database()
      .ref("/users/" + firebase.auth().currentUser.uid)
      .on("value", function (snapshot) {
        name = `${snapshot.val().first_name} ${snapshot.val().last_name}`;
        image = snapshot.val().profile_picture;
      });
    this.setState({
      name: name,
      profile_image: image
    });
  }

  render() {
      return (
        <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <ImageBackground source={require('../assets/bgimg.jpg')} style={styles.backgroundImage}>
     

            <View style={styles.appTitleTextContainer}>
              <Text style={styles.appTitleText}>
               EYEXAM
              </Text>
           
          </View>

          <View style={styles.screenContainer}>
            <View style={styles.profileImageContainer}>
              <Image
                source={{ uri: this.state.profile_image }}
                style={styles.profileImage}
              ></Image>

              <Text style={styles.nameText} >
                {this.state.name}
              </Text>
            </View>

            <View style={{ flex: 0.3 }} />
          </View>
          <View style={{ flex: 0.08 }} />
          </ImageBackground>
        </View>
      );
    }
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#15193c"
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
  },
  appTitle: {
    flex: 0.07,
    flexDirection: "row"
  },
  iconImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  },
  appTitleTextContainer: {
    flex: 0.7,
    justifyContent: "center"
  },
  appTitleText: {
    color: "black",
    fontSize: RFValue(40),
    textAlign:"center",
    marginBottom:100,
    
  },
  screenContainer: {
    flex: 0.85
  },
  profileImageContainer: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center"
  },
  profileImage: {
    width: RFValue(140),
    height: RFValue(140),
    borderRadius: RFValue(70),
    marginBottom:0,
  },
  nameText: {
    color: "black",
    fontSize: RFValue(40),
    marginTop: RFValue(10),
    marginBottom:150,
  },

});