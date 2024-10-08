import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <SafeAreaView />

      <View style={styles.WelcomeSection}>
        <Image source={require('../assets/Images/Foodie Food Logo.png')} style={styles.WelcomePhoto} />
        <Text style={styles.WelcomeText}>Welcome to the Foodie Joint!</Text>
        <Text style={styles.subWelcomeText}>
          "Experience the joy of cooking and savor the art of dining with us."

        </Text>
      </View>

      <TouchableOpacity style={styles.EnterButton} onPress={() => navigation.navigate('Chefslogin')}>
        <Text style={styles.buttonText}>Chef's page</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.EnterButton} onPress={() => navigation.navigate('FullMenu')}>
        <Text style={styles.buttonText}>The Restaurant side</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#023047',
  },
  WelcomeSection: {
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  WelcomePhoto: {
    width: 350,
    height: 350,
  },
  WelcomeText: {
    fontSize: 24,
    color: '#ffb703',
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subWelcomeText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    marginBottom: 30,
  },
  EnterButton: {
    padding: 20,
    backgroundColor: 'white',
    margin: 20,
    alignItems: 'center',
    borderRadius: 5, 
  },
  buttonText: {
    fontSize: 20,
  },
});
``
