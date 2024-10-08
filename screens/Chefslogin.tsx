import { Alert, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import React, { useState } from 'react';

const Chefslogin = ({ navigation }) => {
    const [inputPassword, setInputPassword] = useState('');

    const validateLogin = () => {
        const correctPassword = 'Foodie2024';
        if (inputPassword === correctPassword) {
            navigation.navigate('Menu');
        } else {
            Alert.alert('Error, Wrong password. Please try again.');
        }
    }

    return (
        <View style={styles.container}>
            <SafeAreaView />

            
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                <Text style={styles.backButtonText}>Back</Text>
            </TouchableOpacity>

            <View style={styles.loginSection}>
                <Image source={require('../assets/Images/Foodie Food Logo.png')} style={styles.logo} />

                <Text style={styles.welcomeText}>Welcome to the Foodie Joint</Text>
                <Text style={styles.subText}> "Your culinary management made easy!"</Text>

                <TextInput
                    secureTextEntry
                    value={inputPassword}
                    placeholder="Enter your password"
                    placeholderTextColor={'black'}
                    style={styles.Password}
                    onChangeText={setInputPassword}
                />
            </View>

            <TouchableOpacity style={styles.EnterButton} onPress={validateLogin}>
                <Text style={styles.buttonText}>Enter</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Chefslogin;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#023047',
    },
    backButton: {
        backgroundColor: '#ffb703',
        padding: 10,
        borderRadius: 5,
        width: 70,
        margin: 10,
    },
    backButtonText: {
        color: 'white',
        fontSize: 14,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    loginSection: {
        alignItems: 'center',
        marginTop: 50,
    },
    logo: {
        width: 150,
        height: 150,
        marginBottom: 20,
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ffb703',
        textAlign: 'center',
        marginBottom: 5,
    },
    subText: {
        fontSize: 16,
        color: 'white',
        textAlign: 'center',
        marginBottom: 30,
    },
    Password: {
        margin: 20,
        padding: 20,
        backgroundColor: 'white',
        width: '80%',
        borderRadius: 10,
        textAlign: 'center',
    },
    EnterButton: {
        padding: 20,
        backgroundColor: 'white',
        margin: 20,
        alignItems: 'center',
        borderRadius: 10,
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});
