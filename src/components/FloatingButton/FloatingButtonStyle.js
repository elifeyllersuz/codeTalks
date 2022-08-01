import { StyleSheet } from "react-native"


export default StyleSheet.create({
    container:{
        //ekranda yüzüyormuş gibi
        //component başka componentin üzerine eklenebilir gibi
        position:'absolute',
        bottom:20,
        right:20,
        borderRadius:50,
        width:60,
        height:60,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: '#ffa040'
    },
})