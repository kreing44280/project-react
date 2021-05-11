import React from 'react'
import { View, StyleSheet, Text, Image, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

const NewsCard = ({item}) => {
    return (
        <View style={styles.cardView}>
            <Text style={styles.title}> {item.title} </Text>
            {/* <Text style={styles.author}> {item.url} </Text> */}
            <Image style={styles.image} source={{ uri: item.thumbnailUrl}}></Image>
            {/* <Text style={styles.description}>{item.thumbnailUrl} </Text> */}
        </View>
    )
}

const styles = StyleSheet.create({
    cardView: {
        backgroundColor: 'white',
        margin: width * 0.03,
        borderRadius: width * 0.05,
        shadowColor: '#000',
        shadowOffset: { width:0.5, height: 0.5 },
        shadowOpacity: 0.5,
        shadowRadius: 3
    },  
    title: {
        width: width,
        marginHorizontal: width * 0.05,
        marginVertical: width * 0.03,
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold'
    },
    description:{
        width: width,
        marginVertical: width *0.05,
        marginHorizontal: width * 0.02,
        color: 'gray',
        fontSize: 18
    },
    image:{
        height: height / 6,
        marginVertical: height * 0.02
    },
    author:{
        marginBottom: width * 0.0,
        marginHorizontal: width * 0.05,
        fontSize: 15,
        color: 'gray'
    }
})

export default NewsCard