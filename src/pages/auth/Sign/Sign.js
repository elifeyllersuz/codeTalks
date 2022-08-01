import React ,{useState} from 'react';
import { View, Text, SafeAreaView } from 'react-native'
import { Formik } from 'formik';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import styles from './SignStyle';
import { showMessage } from 'react-native-flash-message';
import auth from '@react-native-firebase/auth';

const initialFormValues = {
    usermail: '',
    password: '',
    repassword: ''
}


const Sign = ({ navigation }) => {
    const [loading, setLoading] = useState(false);

    function handleLogin() {
        navigation.goBack();
    }

  async  function handleFormSubmit(formValues) {
        if (formValues.password != formValues.repassword) {
            showMessage({
                message: 'Şifreler uyuşmuyor !',
                type: "danger",
            });
            //fonksiyondan çık
            return;
        }
        try {
            auth().createUserWithEmailAndPassword(
                formValues.usermail,
                formValues.password,
            );
            showMessage({
                message: 'Kullanıcı oluşturuldu',
                type: 'success',
            })
            navigation.navigate('LoginPage');
            setLoading(false);
        } catch (error) {
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
                        <Input
                            value={values.repassword}
                            onType={handleChange('repassword')}
                            placeholder="şifrenizi tekrar giriniz.."
                            isSecure />
                        <Button text='Kayıt Ol' theme="primary" loading={loading} onPress={handleSubmit} />
                    </>
                )}
            </Formik>

            <Button text='Geri' theme="secondary" onPress={handleLogin} />
        </SafeAreaView>
    )
}

export default Sign;