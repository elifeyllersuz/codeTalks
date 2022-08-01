import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './RoomCardStyle';

const RoomCard = ({ text, onPress }) => {


    return (
        <View style={styles.container}>
            <TouchableOpacity
            onPress={onPress}
                style={styles.content_container}>
                <Text style={styles.text}>{text.room}</Text>
            </TouchableOpacity>

        </View>
    )
}

export default RoomCard;