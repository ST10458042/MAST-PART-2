import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Dish = {
    name: string;
    courseType: string;
    description: string;
    price: string;
};

const FullMenu = ({ navigation }) => {
    const [dishes, setDishes] = useState<Dish[]>([]);
    const [filteredDishes, setFilteredDishes] = useState<Dish[]>([]);
    const [filter, setFilter] = useState<string>('All');

    useEffect(() => {
        const loadDishes = async () => {
            try {
                const storedDishes = await AsyncStorage.getItem('dishes');
                if (storedDishes) {
                    const parsedDishes = JSON.parse(storedDishes);
                    console.log('Loaded Dishes:', parsedDishes);  // Debugging
                    setDishes(parsedDishes);
                    setFilteredDishes(parsedDishes); // Initialize with all dishes
                }
            } catch (error) {
                console.error('Error loading dishes', error);
            }
        };
        loadDishes();
    }, []);

    useEffect(() => {
        if (filter === 'All') {
            setFilteredDishes(dishes);
        } else {
            // Filter based on courseType, ignoring case sensitivity
            const filtered = dishes.filter(dish => 
                dish.courseType && dish.courseType.toLowerCase() === filter.toLowerCase()
            );
            setFilteredDishes(filtered);
        }
    }, [filter, dishes]);

    return (
        <View style={styles.container}>
            <SafeAreaView />

            {/* Back Button */}
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                <Text style={styles.backButtonText}>Back</Text>
            </TouchableOpacity>

            {/* Filter Buttons */}
            <View style={styles.filterContainer}>
                <TouchableOpacity onPress={() => setFilter('All')} style={[styles.filterButton, filter === 'All' && styles.activeFilter]}>
                    <Text style={styles.filterText}>All</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setFilter('Starter')} style={[styles.filterButton, filter === 'Starter' && styles.activeFilter]}>
                    <Text style={styles.filterText}>Starter</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setFilter('Main Meal')} style={[styles.filterButton, filter === 'Main Meal' && styles.activeFilter]}>
                    <Text style={styles.filterText}>Main</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setFilter('Dessert')} style={[styles.filterButton, filter === 'Dessert' && styles.activeFilter]}>
                    <Text style={styles.filterText}>Dessert</Text>
                </TouchableOpacity>
            </View>

            {/* Menu Items */}
            <ScrollView>
                <View style={styles.headerSection}>
                    <Image source={require('../assets/Images/Foodie Food Logo.png')} style={styles.logo} />
                    <View style={styles.menuTitleBox}>
                        <Text style={styles.menuTitleText}>Full Menu</Text>
                    </View>
                    <Text style={styles.counterText}>Total Menu Items: {filteredDishes.length}</Text>
                </View>

                {filteredDishes.length > 0 ? (
                    filteredDishes.map((dish, index) => (
                        <View key={index} style={styles.dishCard}>
                            <Text style={styles.dishName}>{dish.name}</Text>
                            <Text>{dish.courseType}</Text>
                            <Text>{dish.description}</Text>
                            <Text>R{dish.price}</Text>
                        </View>
                    ))
                ) : (
                    <Text style={styles.noDishesText}>No dishes available for this category.</Text>
                )}
            </ScrollView>
        </View>
    );
};

export default FullMenu;

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#023047' },
    headerSection: { alignItems: 'center', marginTop: 20 },
    logo: { width: 100, height: 100, marginBottom: 10 },
    menuTitleBox: { borderWidth: 2, borderColor: 'white', paddingHorizontal: 20, paddingVertical: 5, borderRadius: 10, marginBottom: 10 },
    menuTitleText: { fontSize: 30, color: 'white', fontWeight: 'bold' },
    counterText: { fontSize: 18, color: 'white', marginVertical: 10 },
    backButton: { backgroundColor: '#ffb703', padding: 15, margin: 10, borderRadius: 5, width: 70 },
    backButtonText: { color: 'white', fontSize: 10, fontWeight: 'bold', textAlign: 'center' },
    dishCard: { backgroundColor: 'white', margin: 10, padding: 10, borderRadius: 5 },
    dishName: { fontSize: 20, fontWeight: 'bold' },
    filterContainer: { flexDirection: 'row', justifyContent: 'space-around', marginVertical: 10 },
    filterButton: { padding: 10, backgroundColor: 'white', borderRadius: 5, width: 100, alignItems: 'center' },
    filterText: { fontSize: 16, color: '#023047', fontWeight: 'bold' },
    activeFilter: { backgroundColor: '#028090' },
    noDishesText: { color: 'white', fontSize: 16, textAlign: 'center', marginTop: 50 },
});
