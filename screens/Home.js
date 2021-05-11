import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking
} from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

const slides = [
  {
    key: "one",
    title: "The LivingOS",
    text:
      "Lorem ipsum dolor sit amet consecte tuer adipsing elit sed diam monum my nibh eusimod eltor",
    image: require("../images/5.jpg"),
    uri: "https://www.thelivingos.com/",
  },
  {
    key: "two",
    title: "GOOGLE MAP",
    text:
      "Lorem ipsum dolor sit amet consecte tuer adipsing elit sed diam monum my nibh eusimod eltor",
    image: require("../images/4.jpg"),
    uri: "https://www.google.com/maps",
  },
  {
    key: "three",
    title: "FULL SIZE",
    text:
      "Lorem ipsum dolor sit amet consecte tuer adipsing elit sed diam monum my nibh eusimod eltor",
    image: require("../images/3.png"),
  },
];

export default class Home extends React.Component {
  state = { showHomePage: false };
  _renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => Linking.openURL(item.uri)}>
        <View style={{ flex: 1 }}>
          <Image
            source={{ uri: item.image }}
            style={{
              resizeMode: "cover",
              height: "200%",
              width: "100%",
            }}
          />
          <Text
            style={{
              paddingTop: 25,
              paddingBottom: 10,
              fontSize: 23,
              fontWeight: "bold",
              color: "#21465b",
              alignSelf: "center",
            }}
          >
            {item.title}
          </Text>

          <Text
            style={{
              textAlign: "center",
              color: "#b5b5b5",
              fontSize: 15,
              paddingHorizontal: 30,
            }}
          >
            {item.text}
          </Text>
          <Button
                title=" Logout"
                icon={<Icon name="" size="15" color="white"></Icon>}
                containerStyle={{
                  marginTop: 10,
                }}
                buttonStyle={{
                    backgroundColor: "black",
                }}
                onPress={() => this.props.navigation.navigate("Login")}
            ></Button>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    if (this.state.showHomePage) {
      return <Home />;
    } else
      return (
        <AppIntroSlider
          renderItem={this._renderItem}
          data={slides}
          activeDotStyle={{
            backgroundColor: "#21465b",
            width: 30,
          }}
        />
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
