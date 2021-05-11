import React from 'react'
import { View, StyleSheet} from 'react-native'
import Slider from '../Components/Slider'
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

const images = [
    'https://www.thelivingos.com/wp-content/uploads/2018/05/fav.png',
    'https://miro.medium.com/max/1024/0*oJK4t4_NTgdBPPgz.png',
    'http://d20aeo683mqd6t.cloudfront.net/th/articles/title_images/000/038/786/medium/IMG_6895.jpg?2019',
    'https://img.wongnai.com/p/1920x0/2018/06/18/2979c50de28b4137a3c0224591db4af5.jpg',
]

export default class Home extends React.Component{


    render(){
        return (
            <View style={style.container}>
               <Slider images={images}></Slider>
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
        )
    }
}

const style = StyleSheet.create({
    container: { 
        marginTop: 50, 
    },
})