import React, {Component} from 'react'
import { StyleSheet, ScrollView, ActivityIndicator, View, Text} from 'react-native'
import firebase from '../database/firebaseDb'
import { ThemeProvider, Button, Input, Image } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'

class AddUserScreen extends Component {
    constructor() {
        super()

        this.dbRef = firebase.firestore().collection('react-native')
        this.state = {
            name: "",
            email: "",
            mobile: "",
            isLoading: false
        }
    }

    inputValueUpdate = (val, prop) => {
        const state = this.state
        state[prop] = val
        this.setState(state)
    }

    storeUser() {
        if (this.state.name == ''){
            alert("Fill at least your name!")
        }else{
            this.setState({
                isLoading: true
            })
            this.dbRef.add({
                name: this.state.name,
                email: this.state.email,
                mobile: this.state.mobile
            }).then((res) => {
                this.setState({
                    name: '',
                    email: '',
                    mobile: '',
                    isLoading: false
                })
                this.props.navigation.navigate("UserScreen");
            })
            .catch((err) => {
                console.log('Error found: ', err)
                this.setState({
                    isLoading: false
                })
            })
        }
    }

    render() {

        if (this.state.isLoading){
            return (
                <View style={styles.preloader}>
                    <ActivityIndicator size="large" color="#9E9E9E"></ActivityIndicator>
                </View>
            )
        }

        return (
            <View>
                <ThemeProvider theme={theme}>
                    <ScrollView style={styles.container}>
                        <Image
                            source={{ uri: 'https://image.pngaaa.com/930/2507930-middle.png'}}
                            style={{ width: 200, height: 200}}
                            containerStyle={{ marginLeft: 'auto', marginRight: 'auto'}}
                        >
                        </Image>
                        <Input
                            leftIcon={
                                <Icon
                                    name="user-o"
                                    size={20}
                                    color="#0085E6"
                                ></Icon>
                            }
                            placeholder={" Name"}
                            value={this.state.name}
                            onChangeText={(val) => this.inputValueUpdate(val, 'name')}
                        ></Input>
                        <Input
                            leftIcon={
                                <Icon
                                    name="envelope-o"
                                    size={20}
                                    color="#0085E6"
                                ></Icon>
                            }
                            placeholder={" Email"}
                            value={this.state.email}
                            onChangeText={(val) => this.inputValueUpdate(val, 'email')}
                        ></Input>
                        <Input
                            leftIcon={
                                <Icon
                                    name="mobile"
                                    size={20}
                                    color="#0085E6"
                                ></Icon>
                            }
                            placeholder={" Mobile"}
                            value={this.state.mobile}
                            onChangeText={(val) => this.inputValueUpdate(val, 'mobile')}
                        ></Input>
                        <Button
                            title=' Add User'
                            icon={
                                <Icon
                                    name='check'
                                    size='15'
                                    color='white'
                                ></Icon>
                            }
                            buttonStyle={{
                                backgroundColor: 'green'
                            }}
                            onPress={() => this.storeUser()}
                        ></Button>
                        <Button
                            title=' Go to User List'
                            icon={
                                <Icon
                                    name='users'
                                    size='15'
                                    color='white'
                                ></Icon>
                            }
                            containerStyle={{
                                marginTop: 10
                            }}
                            onPress={() => this.props.navigation.navigate('UserScreen')}
                        ></Button>
                        {/* <Button
                            title=' Go to User Detail'
                            icon={
                                <Icon
                                    name='users'
                                    size='15'
                                    color='white'
                                ></Icon>
                            }
                            containerStyle={{
                                marginTop: 10
                            }}
                            onPress={() => this.props.navigation.navigate('UserDetailScreen')}
                        ></Button> */}
                    </ScrollView>
                </ThemeProvider>
            </View>
        )
    }
}

const theme = {
    Button: {
        raised: true
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35
    },
    preloader:{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default AddUserScreen