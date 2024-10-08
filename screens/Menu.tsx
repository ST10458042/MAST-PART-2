import { Alert, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import DishCard from '../screens/dishcard';

const Menu = ({ navigation }) => {
    const [dishes, setDishes] = useState<Dish[]>([]);

    type Dish = {
        name: string;
        courseType: string;
        description: string;
        price: string;
    };

    // Load dishes from AsyncStorage when the component mounts or when focus changes
    useFocusEffect(
        React.useCallback(() => {
            const loadDishes = async () => {
                const storedDishes = await AsyncStorage.getItem('dishes');
                if (storedDishes) {
                    setDishes(JSON.parse(storedDishes));
                }
            };
            loadDishes();
        }, [])
    );

    const handleDeleteDish = (dishName: string) => {
        const updatedDishes = dishes.filter(dish => dish.name !== dishName);
        setDishes(updatedDishes);
        AsyncStorage.setItem('dishes', JSON.stringify(updatedDishes));
        Alert.alert('Success', 'Dish removed from the menu.');
    };

    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.pagecontainer} />

            {/* Logo Section */}
            <View style={styles.logoContainer}>
                <Image source={require('../assets/Images/Foodie Food Logo.png')} style={styles.logo} />
            </View>

            <View style={styles.navbar}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                </TouchableOpacity>
                <Text style={{ fontFamily: 'Baithe', color: 'white', fontSize: 20, backgroundColor: 'black', padding: 20 }}>Menu</Text>
                <TouchableOpacity style={styles.menubutton} onPress={() => navigation.navigate('Menumodal')}>
                   <Text>ADDED TO MENU</Text>
                </TouchableOpacity>
            </View>

            <ScrollView horizontal style={styles.Items}>
                {dishes.map((dish, index) => (
                    <DishCard key={index} dish={dish} onDelete={handleDeleteDish} />
                ))}
            </ScrollView>

            <View style={styles.indicator}></View>
        </View>
    );
};

export default Menu;

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#023047',
    },
    Background: {
        height: '75%',
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
    },
    pagecontainer: {
        backgroundColor: 'transparent',
    },
    logoContainer: {
        alignItems: 'center',
        marginVertical: 20,
    },
    logo: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
    },
    navbar: {
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 3,
        borderColor: '#023047',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    menubutton: {},
    Items: {
        height: 500,
    },
    MealCard: {
        backgroundColor: 'pink',
        margin: 20,
        padding: 20,
        height: 440,
        width: 350,
        borderRadius: 30,
    },
    indicator: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        bottom: 160,
    },
    card: {
        backgroundColor: 'lightblue',
        margin: 20,
        padding: 20,
        height: 440,
        width: 350,
        borderRadius: 30,
        gap: 20,
    },
    courseType: {
        fontFamily: 'Helvetica-LightOblique',
        fontSize: 16,
        color: 'white',
    },
    dishName: {
        fontFamily: 'Baithe',
        fontSize: 50,
        color: 'white',
    },
    description: {
        fontFamily: 'Helvetica-LightOblique',
        fontSize: 16,
        color: 'white',
    },
    price: {
        fontFamily: 'Baithe',
        fontSize: 20,
        color: 'white',
    },
});
