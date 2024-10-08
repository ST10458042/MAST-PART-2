// MenuCard.tsx
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

type MenuCardProps = {
  dish: {
    id: string; // Unique identifier
    name: string;
    description: string;
    price: string;
    courseType: string;
  };
  onAction: () => void;
  actionLabel: string;
};

const MenuCard: React.FC<MenuCardProps> = ({ dish, onAction, actionLabel }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.dishName}>{dish.name}</Text>
      <Text style={styles.courseType}>{dish.courseType}</Text>
      <Text style={styles.dishDescription}>{dish.description}</Text>
      <Text style={styles.dishPrice}>R{dish.price}</Text>

      <TouchableOpacity onPress={onAction} style={styles.actionButton} activeOpacity={0.7}>
        <Text style={styles.actionButtonText}>{actionLabel}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MenuCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    marginVertical: 10,
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  dishName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#023047',
  },
  courseType: {
    fontSize: 16,
    fontWeight: '600',
    color: '#028090',
    marginBottom: 5,
  },
  dishDescription: {
    fontSize: 14,
    color: '#333333',
    marginBottom: 5,
  },
  dishPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },
  actionButton: {
    marginTop: 10,
    backgroundColor: '#ffb703',
    padding: 10,
    borderRadius: 5,
  },
  actionButtonText: {
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
