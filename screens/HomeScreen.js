import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>WanderSol</Text>
      <Text style={styles.subtitle}>Wander through your favourite cities using Web3!</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('City')}>
        <Text style={styles.buttonText}>Explore</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 36, fontWeight: 'bold', marginBottom: 20 },
  subtitle: { fontSize: 18, textAlign: 'center', marginBottom: 40, paddingHorizontal: 20 },
  button: { backgroundColor: '#000', paddingVertical: 15, paddingHorizontal: 40, borderRadius: 10 },
  buttonText: { color: '#fff', fontSize: 16 },
});

export default HomeScreen;
