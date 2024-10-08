import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';


const DishCard = ({ dish, onDelete }) => {
    return (
        <View style={styles.cardcontainer}>
        <View style={styles.card}>
            <Text style={styles.dishName}>{dish.name}</Text>
            <Text style={styles.courseType}>{dish.courseType}</Text>
            <Text style={styles.description}>{dish.description}</Text>
            <Text style={styles.price}>R {dish.price}</Text>
            <TouchableOpacity onPress={() => onDelete(dish.name)}>
                <Text>Delete</Text>
            </TouchableOpacity>
            </View>
        </View>
    );
};

export default DishCard;

const styles = StyleSheet.create({
    cardcontainer: {
        flexDirection: 'row',
        left: 20,
    },
    card: {
        padding: 20,
        backgroundColor: '#219ebc',
        height: 500,
        width: 350,
        borderRadius: 20,
        gap: 20,
        marginHorizontal: 10,
    },
    dishName: {
        fontFamily: 'Baithe',
        fontSize: 50,
       
        fontWeight: 'bold',
        color: 'white'
    },
    courseType: {
        fontFamily: 'Helvetica-LightOblique',
        fontSize: 20,
        color: 'white'


    },
    description: {
        fontFamily: 'Helvetica-LightOblique',
        fontSize: 18,
        color: '#ffb703',
    },
    price: {
        fontFamily: 'Baithe',
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white'
    },
    deleteButton: {
        padding: 20,
        width: 30,
        height: 30,
    },
});