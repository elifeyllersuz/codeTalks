import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './pages/auth/Login';
import Sign from './pages/auth/Sign';
import Messages from './pages/Messages';
import Rooms from './pages/Rooms'
import FlashMessage from 'react-native-flash-message';
import auth from '@react-native-firebase/auth'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createNativeStackNavigator()


const App = () => {

    const [userSession, setUserSession] = React.useState();

    React.useEffect(() => {
        auth().onAuthStateChanged(user => {

            //* !! dolu geliyosa true boş geliyosa false */
            setUserSession(!!user);
        })
    })

    const AuthStack = () => {
        return (

            <Stack.Navigator screenOptions={{
                headerShown: false,
            }}>
                <Stack.Screen name='LoginPage' component={Login} />
                <Stack.Screen name='SignPage' component={Sign} />
            </Stack.Navigator>

        )
    }

    return (
        <NavigationContainer>

            {!userSession ? (
                <AuthStack />
            ) : (
                <Stack.Navigator >
                    <Stack.Screen name='Rooms' component={Rooms}

                        options={{
                            title: 'Odalar', headerTintColor: '#ffa040',
                            style: {
                                backgroundColor: 'white'
                            }

                        }}


                    />
                    <Stack.Screen name='Messages' component={Messages}
                        options={{
                            headerRight: () => (
                                <Icon
                                    name='logout'
                                    size={30}
                                    color='#ff6f00'
                                    onPress={() => auth().signOut()} />

                            )

                        }} />
                </Stack.Navigator>
            )}

            <FlashMessage position='top' />
        </NavigationContainer>
    )
}

export default App;