import React, { useState } from 'react';
import { View,Text ,SafeAreaView} from 'react-native'
import { Formik } from 'formik';
import auth from '@react-native-firebase/auth';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import styles from './LoginStyle';
import { showMessage } from 'react-native-flash-message';
import authErrorMessageParser from '../../../utils/authErrorMessageParser'

const initialFormValues = {
   usermail: '',
   password: ''
}

const Login = ({navigation}) => {
const [loading,setLoading] = useState(false);

   function handleSignUp() {
      navigation.navigate('SignPage');
   }

  async function handleFormSubmit(formValues){
    try {
        setLoading(true);
        await auth().signInWithEmailAndPassword(
            formValues.usermail,
            formValues.password,
        )
      //  navigation.navigate('MessagesPage');
        setLoading(false);
    } catch (error) {
        console.log(error);
        showMessage({
            message: authErrorMessageParser(error.code),
            type: "danger",
        });
        setLoading(false);
    }
   }

   return (
      <SafeAreaView style={styles.container}>
          <Text style={styles.header}>codetalks</Text>
          <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
              {({ values, handleChange, handleSubmit }) => (
                  <>
                      <Input
                          value={values.usermail}
                          onType={handleChange('usermail')}
                          placeholder="e-postanızı giriniz.." />
                      <Input
                          value={values.password}
                          onType={handleChange('password')}
                          placeholder="şifrenizi giriniz.."
                          isSecure />
                      <Button text='Giriş Yap' theme="primary" onPress={handleSubmit} loading={loading}  />
                  </>
              )}

          </Formik>

          <Button text='Kayıt Ol' theme="secondary" onPress={handleSignUp} />
      </SafeAreaView>
  )
}

export default Login;