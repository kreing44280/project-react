import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AddUserScreen from "./screens/AddUserScreen";
import UserScreen from "./screens/UserScreen";
import UserDetailScreen from "./screens/UserDetailScreen";
import Login from "./screens/Login";
import News from "./screens/News";
import Home from "./screens/Home";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#0085E6",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ title: "Login" }}
      ></Stack.Screen>
      <Stack.Screen
        name="AddUserScreen"
        component={AddUserScreen}
        options={{ title: "Add User" }}
      ></Stack.Screen>
      <Stack.Screen
        name="UserScreen"
        component={UserScreen}
        options={{ title: "User Screen" }}
      ></Stack.Screen>
      <Stack.Screen
        name="UserDetailScreen"
        component={UserDetailScreen}
        options={{ title: "User Detail" }}
      ></Stack.Screen>
      <Stack.Screen
        name="News"
        component={News}
        options={{ title: "News" }}
      ></Stack.Screen>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: "Home" }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack></MyStack>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
