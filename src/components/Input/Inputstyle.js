import { StyleSheet ,Platform} from 'react-native'

export default StyleSheet.create ( {
  container : {
    padding:8,
    margin:10,
   // backgroundColor:"#e0e0e0",
   borderColor:'white',
    borderBottomWidth:1,
    flexDirection:'row'
  },
  input:{
    flex:1,
    color:'white',
    //platforma göre 
     padding:Platform.OS =='android' ? 0 : 5,
  }
})
