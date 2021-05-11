import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Button, FlatList } from "react-native";
import NewsCard from "../Components/NewsCard";
import newApi from '../apis/News'

const News = ({ navigation }) => {

    const [ news, setNews ] = useState([])

    useEffect(()=>{
        getNewsFromAPI()
    },[])

    // const newResponse = async() => {
    //     const response = await newApi.get('photos')
    //     console.log(response.data)
    // }

    function getNewsFromAPI(){
        newApi.get('photos')
        .then(async function(response){
            setNews(response.data)
        })
        .catch(function(error){
            console.log(error)
        })
    }

    if(!news){
        return null
    }

    return (
        <View>
            <FlatList data={news}
                keyExtractor={(item, index) => 'key' + index}
                renderItem={({item}) => {
                    return <NewsCard item={item}></NewsCard>
                }}
            ></FlatList>
        </View>
    );
};

export default News;
