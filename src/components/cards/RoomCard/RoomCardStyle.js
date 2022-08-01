import React from 'react';

import { StyleSheet ,Dimensions} from 'react-native'

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'space-between',
        //backgroundColor:'white'
        
    },
    text:{
        fontSize:25,
        color:'#ffa040',


        
    },
    content_container:{
         width:deviceSize.width/2.5,
         height:deviceSize.height/5,
         borderWidth:1,
         margin:10,
         //marginVertical:10,
         paddingHorizontal:10,
         
         alignItems:'center',
         //tam orta için ikisi 
         justifyContent:'center',
         borderColor:'#ffa040',
         backgroundColor:'white'
        
         
    }
})