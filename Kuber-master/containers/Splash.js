import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Animated,
  Image,
  ImageBackground,
  Dimensions
} from 'react-native'

var {height, width} = Dimensions.get('window')
export default class Splash extends Component {
    static navigationOptions = {
        title: 'Welcome',
        header : "title",
    }
    state = {
        logoOpacity: new Animated.Value(0),
        titleMarginTop: new Animated.Value(height / 2)
    }
    async componentDidMount() {
        //애니메이션 추가
        Animated.sequence([
            //애니메이션 순서대로
            Animated.timing(this.state.logoOpacity,{
                toValue: 1,                  
                duration: 1500,   
            }),
            //애니메이션 Text ?
            Animated.timing(this.state.titleMarginTop, {
                toValue: 10,
                duration: 1000, //1000 miliseconds = 1 second
            })
        ]).start(() => {
            //애니메이션 끝
            //로그인 탐색 방법? => StackNavigation 사용
            this.props.navigation.navigate("Tabs")
        })
    }
    render() {
        return <View style={styles.container}>
        <ImageBackground source={require('../assets/images/bg.png')}  style={styles.backgroundImage}>
            <Animated.Image source={require('../assets/images/Cropimg.jpg')} 
                style={{...styles.logo, opacity: this.state.logoOpacity}} >                
            </Animated.Image>
            <Animated.Text style={{...styles.title, 
                                marginTop:this.state.titleMarginTop}}>TCLONE 
            </Animated.Text>
            </ImageBackground>
        </View>
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    backgroundImage:{
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: "center",
        alignItems: "center",
        opacity: 0.7
   },
    logo: {
        width: 130,
        height: 130,
        borderRadius: 130 / 2,
    },
    title: {        
        color: '#FF6F61',
        marginTop: 10,    
        textAlign: 'center',
        width: 400,
        fontSize: 21,
        fontFamily: 'GothamRoundedBold_21016',
        fontWeight: 'bold'
    }
})