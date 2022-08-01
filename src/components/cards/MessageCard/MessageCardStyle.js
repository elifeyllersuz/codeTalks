import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "#ff6f00",
    margin: 10,
    // marginHorizontal:10,
    borderRadius: 10,
    padding: 15,
    backgroundColor: "#ff6f00",
    opacity: 0.9,
    elevation: 8,
    // shadowColor: '#52006A',
  },
  inner_container: {
    flexDirection: 'row',
    //  justifyContent:'center'


  },
  user: {
    flex: 1,
    paddingBottom: 10,
    color:'white',
    fontWeight:'bold',
  },
  date: {
    // flex: 1
    // textAlign:'right'
    color:'white',
  },
  title: {
    color: 'white',
    fontSize:15
  },
  
 
})