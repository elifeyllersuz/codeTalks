import React, { useState } from 'react';
import { SafeAreaView, Text, FlatList } from 'react-native';
import FloatingButton from '../../components/FloatingButton';
import RoomModal from '../../components/modal/RoomModal/RoomModal';
import database from '@react-native-firebase/database'
import auth from '@react-native-firebase/auth'

import styles from './RoomStyle';
import RoomCard from '../../components/cards/RoomCard/RoomCard';
import parseData from '../../utils/parseData';

const Rooms = ({ navigation }) => {
    const [inputModalVisible, setInputModalVisible] = useState(false);
    const [roomList, setRoomList] = useState([]);

    //on diyerek güncelle

    React.useEffect(() => {
        database()
        .ref('rooms/')
        .on('value',snapshot => {
            const data = snapshot.val();
            const parsedData = parseData(data)
            setRoomList(parsedData)
          //  console.log(data);
        })
    },[])




    function handleInputToggle() {
        setInputModalVisible(!inputModalVisible);
    }

    function handleSendContent(roomName) {
        handleInputToggle();
        // console.log(roomName);
        sendRoom(roomName);
    }

    function sendRoom(roomName) {
        const usermail = auth().currentUser.email;


        const contentObject = {
            room : roomName,
            userName: usermail.split('@')[0],
            date : new Date().toISOString()
        }
        database().ref('rooms/').push(contentObject || {});
        //console.log(contentObject);
    }

    const goToMessagesPage = id => {
        navigation.navigate('Messages',id)
    }

    const renderRoom = ({item}) => 
    <RoomCard
    text={item}
    onPress={() => goToMessagesPage(item.id)}
    
    />

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={roomList}
                renderItem={renderRoom}
                 numColumns='2'
                />
            <FloatingButton icon='plus' onPress={handleInputToggle} />

            <RoomModal
                visible={inputModalVisible}
                onClose={handleInputToggle}
                onSend={handleSendContent} />
        </SafeAreaView>
    )
}

export default Rooms;