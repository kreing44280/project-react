import React, { Component } from 'react'
import { StyleSheet, ScrollView, ActivityIndicator, View, Text } from 'react-native'
import { ListItem, Badge } from 'react-native-elements'
import firebase from '../database/firebaseDb'

class UserScreen extends Component {
    constructor(){
        super()

        this.firestoreRef = firebase.firestore().collection('react-native')
        this.state = {
            isLoading: true,
            userArr: []
        }
    }

    componentDidMount(){
        this.unsubscribe = this.firestoreRef.onSnapshot(this.getCollerton)
    }

    componentWillUnmount(){
        this.unsubscribe();
    }

    getCollerton = (querySnapShot) => {
        const userArr = []
        querySnapShot.forEach((res) => {
            const { name, email, mobile } = res.data()
            userArr.push({
                key: res.id,
                res,
                name,
                email,
                mobile
            })
        })
        this.setState({
            userArr,
            isLoading: false
        })
    }

    render() {

        if (this.state.isLoading) {
            return(
                <View style={styles.preloader}>
                    <ActivityIndicator size="large" color="#9E9E9E"></ActivityIndicator>
                </View>
            )
        }

        return(
            <ScrollView>
                {
                    this.state.userArr.map((item, i) => {
                        return (
                            <ListItem
                                key={i}
                                bottomDivider
                                onPress={() => {
                                    this.props.navigation.navigate("UserDetailScreen",{
                                        userKey: item.key
                                    })
                                }}
                            >
                                <Badge 
                                    value={i+1}
                                ></Badge>
                                <ListItem.Content>
                                    <ListItem.Title>{item.name}</ListItem.Title>
                                    <ListItem.Subtitle>{item.email}</ListItem.Subtitle>
                                    <ListItem.Subtitle>{item.mobile}</ListItem.Subtitle>
                                </ListItem.Content>
                                <ListItem.Chevron></ListItem.Chevron>
                            </ListItem>
                        )
                    })
                }
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
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

export default UserScreen