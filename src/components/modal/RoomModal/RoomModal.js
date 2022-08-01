import React from 'react';
import { View, TextInput } from 'react-native'
import Modal from 'react-native-modal';
import Button from '../../Button';
import styles from './RoomModalStyle';

const RoomModal = ({ visible, onClose, onSend }) => {
const [text,setText] = React.useState(null);
    function handleSend() {
        if (!text) {
            return;
        }
        onSend(text);
        setText('');
    }

  
    return (
        <Modal style={styles.modal}
            isVisible={visible}
            swipeDirection='down'
            onSwipeComplete={onClose}
            onBackdropPress={onClose}
            onBackButtonPress={onClose}>
            <View style={styles.container}>
                <View style={styles.input_container}>
                    <TextInput placeholder='Oda adı...' onChangeText={setText}
                        multiline />

                </View>
                <Button text='Ekle' onPress={handleSend} />
            </View>


        </Modal>
    )
}

export default RoomModal;