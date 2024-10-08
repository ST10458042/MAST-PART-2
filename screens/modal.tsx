import React, { useState } from 'react';
import { View, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import RNPickerSelect from 'react-native-picker-select';

const Menumodal = ({ navigation }) => {
    const [courseType, setCourseType] = useState('');
    const [dishName, setDishName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = async () => {
        if (!dishName || !courseType || !description || !price) {
            alert('Please fill in all fields');
            return;
        }

        const newDish = {
            name: dishName,
            courseType,
            description,
            price,
        };

        try {
            const storedDishes = await AsyncStorage.getItem('dishes');
            const dishesArray = storedDishes ? JSON.parse(storedDishes) : [];
            dishesArray.push(newDish);
            await AsyncStorage.setItem('dishes', JSON.stringify(dishesArray));
        } catch (error) {
            console.log('Error saving dish', error);
        }

       
        setDishName('');
        setCourseType('');
        setDescription('');
        setPrice('');

        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.pagecontainer} />
           

            <View style={styles.topBar}>
                <Text style={styles.topBarText}>Add a dish Chef</Text>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text>Back</Text>
                </TouchableOpacity>
            </View>

            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ backgroundColor: 'transparent' }}>
                <ScrollView style={{ padding: 30 }}>
                    <View style={styles.menuAddition}>
                        <TouchableOpacity style={styles.CourseButton}>
                             <Text style={styles.addbuttontext}>Course Type:</Text>
                        </TouchableOpacity>
                        
                        <RNPickerSelect
            onValueChange={(value) => setCourseType(value)}
            items={[
                { label: 'Starter', value: 'starter' },
                { label: 'Main Meal', value: 'main meal' },
                { label: 'Dessert', value: 'dessert' },
            ]}
            style={{
                inputIOS: {
                    fontSize: 16,
                    paddingVertical: 12,
                    paddingHorizontal: 100,
                    borderWidth: 1,
                    borderColor: 'gray',
                    borderRadius: 40,
                    color: 'white', 
                    alignSelf: 'center',
                },
                inputAndroid: {
                    fontSize: 16,
                    paddingVertical: 8,
                    paddingHorizontal: 10,
                    borderWidth: 1,
                    borderColor: 'gray',
                    borderRadius: 4,
                    color: 'black', // Text color
                },
            }}
        />
    

                        <TextInput placeholder="Dish Name" style={styles.Dishname} value={dishName} onChangeText={setDishName} />
                        <TextInput placeholder="Description" style={styles.Description} value={description} onChangeText={setDescription} />
                        <TextInput placeholder="Price" keyboardType="number-pad" style={styles.Price} value={price} onChangeText={setPrice} />

                        <TouchableOpacity onPress={handleSubmit} style={styles.addbutton}>
                            <Text style={styles.addbuttontext}>Add to menu</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </View>
    );
};

export default Menumodal;

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

    topBar: {
        padding: 20,
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderColor: 'black',
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    topBarText: {
        fontFamily: 'Baithe',
        fontSize: 20,
        color: 'white',
    },

    menuAddition: {
        alignItems: 'center',
        gap: 20,
        top: 20,
    },

    CourseButton: {
        padding: 10,
        borderBottomWidth: 4,
    },
    
    picker: {
        ...Platform.select({
            ios: {
                height: 2, 
            },
            android: {
                height: 50,
            },
        }),
    },

    Dishname: {
        padding: 10,
        backgroundColor: 'white',
        width: '80%',
        textAlign: 'left'
        
    },

    Description: {
        padding: 10,
        backgroundColor: 'white',
        width: '80%',
        textAlign: 'left'
    },

    Price: {
        padding: 10,
        backgroundColor: 'white',
        width: '80%',
        textAlign: 'left'
    },

    addbutton: {
        padding: 20,
        alignItems: 'center',
        backgroundColor: '#ffb703',
        borderRadius: 10,
        width: '50%',

    },

    addbuttontext: {
        color: 'white',
        fontFamily: 'Helvetica-LightOblique',
        fontSize: 15,
    }
})
