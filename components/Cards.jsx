import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Card = ({ image, title }) => {
  return (
    <TouchableOpacity style={styles.card} className="w-fit rounded-lg border border-stone-300 shadow-md p-2">
      <Image source={image} style={styles.image} className="rounded-md" />
      <Text style={styles.title} className="font-rbold">{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 10,
    marginVertical: 5,
    alignItems: 'center',
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 10,
  },
  title: {
    textAlign: 'center',
    color:"black"
  },
});

export default Card;
