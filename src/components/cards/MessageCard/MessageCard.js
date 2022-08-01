import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './MessageCardStyle';
import { formatDistance, parseISO } from 'date-fns';
import { tr } from 'date-fns/locale';

const MessageCard = ({ message}) => {
    const formattedDate = formatDistance(parseISO(message.date), new Date(),
        {
            addSuffix: true,
            locale: tr
        })

    return (
        <View style={styles.container}>
            <View style={styles.inner_container}>
                <Text style={styles.user}>{message.username}</Text>
                <Text style={styles.date}>{formattedDate}</Text>
            </View>
            <Text style={styles.title}>{message.message}</Text>
            
        </View>
    )
}

export default MessageCard;