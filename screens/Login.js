import React, { Component } from "react";
import {
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  View,
  Text,
} from "react-native";
import { ThemeProvider, Button, Input, Image } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      userArr: [],
      isLoading: false,
    };
  }

  inputValueUpdate = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  };

  chklogin() {
    if (this.state.username == "") {
      alert("Fill at least your username!");
    } else if (this.state.password == "") {
      alert("Fill at least your password!");
    } else {
      this.setState({
        isLoading: true,
      });
      // this.props.navigation.navigate("UserScreen");
      this.props.navigation.navigate("Home");
    }
  }

  render() {
    return (
      <View>
        <ThemeProvider theme={theme}>
          <ScrollView style={styles.container}>
            <Image
              source={{
                uri: "https://image.pngaaa.com/930/2507930-middle.png",
              }}
              style={{ width: 200, height: 200 }}
              containerStyle={{ marginLeft: "auto", marginRight: "auto" }}
            ></Image>
            <Input
              leftIcon={<Icon name="user-o" size={20} color="#0085E6"></Icon>}
              placeholder={" Username"}
              value={this.state.username}
              onChangeText={(val) => this.inputValueUpdate(val, "username")}
            ></Input>
            <Input
              leftIcon={<Icon name="rocket" size={20} color="#0085E6"></Icon>}
              placeholder={" Password"}
              value={this.state.password}
              onChangeText={(val) => this.inputValueUpdate(val, "password")}
            ></Input>
            <Button
              title=" LOGIN"
              icon={<Icon name="check" size="15" color="white"></Icon>}
              buttonStyle={{
                backgroundColor: "green",
              }}
              onPress={() => this.chklogin()}
              containerStyle={{
                marginTop: 10,
              }}
            ></Button>
            <Button
              title=" Add User"
              icon={<Icon name="" size="15" color="white"></Icon>}
              containerStyle={{
                marginTop: 10,
              }}
              onPress={() => this.props.navigation.navigate("AddUserScreen")}
            ></Button>
            <Button
              title=" ListView"
              icon={<Icon name="" size="15" color="white"></Icon>}
              containerStyle={{
                marginTop: 10,
              }}
              buttonStyle={{
                backgroundColor: "black",
              }}
              onPress={() => this.props.navigation.navigate("News")}
            ></Button>
          </ScrollView>
        </ThemeProvider>
      </View>
    );
  }
}

const theme = {
  Button: {
    raised: true,
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
  preloader: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default Login;
