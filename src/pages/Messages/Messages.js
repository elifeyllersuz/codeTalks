import React,{useState} from 'react';
import { View,Text ,SafeAreaView,FlatList} from 'react-native'
import auth from '@react-native-firebase/auth'
import database from '@react-native-firebase/database'
import styles from './MessagesStyle';
import FloatingButton from '../../components/FloatingButton';
import MessageCard from '../../components/cards/MessageCard/MessageCard';
import MessagesModal from '../../components/modal/MessagesModal';
import parseData from '../../utils/parseData';


const Messages = ({route}) => {
    const id= route.params.id;

    const [inputModalVisible, setInputModalVisible] = useState(false);
    const [messagesList , setMessagesList] = useState([]);

    React.useEffect(() =>{
    database()
    .ref(`rooms/${id}/messages`)
    .on('value',snapshot => {
        const messageData = snapshot.val();
        const parsedData = parseData(messageData || {});
        setMessagesList(parsedData);
    })
    },[])
    const handleInputToggle = () => {
        setInputModalVisible(!inputModalVisible);
    }

    function handleSendMessages(usermessage){
        handleInputToggle();
        sendMessage(usermessage);

    }

    function sendMessage (usermessage){
        const usermail = auth().currentUser.email;

        const messageObj = {
            message : usermessage,
            username : usermail.split('@')[0],
            date: new Date().toISOString(),
        }
        database().ref(`rooms/${id}/messages`).push(messageObj);
    }

    const renderMessage = ({item}) => 
    <MessageCard
    message={item}/>

    return(

        <SafeAreaView style={styles.container}>
            <FlatList
            data={messagesList}
            renderItem={renderMessage}/>
            
              <FloatingButton icon='plus' onPress={handleInputToggle}/>
              <MessagesModal
              visible={inputModalVisible}
              onClose={handleInputToggle}
              onSend={handleSendMessages}
              />
              
        </SafeAreaView>
    )
}

export default Messages;