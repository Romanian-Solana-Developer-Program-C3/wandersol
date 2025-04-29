import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ChallengeScreen = ({ route }) => {
  const { challenge } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{challenge.title}</Text>
      <Text style={styles.xp}>We’re off to a scary start • 5 XP</Text>
      <Text style={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Text>
      <Text style={styles.rating}>4.5 ★ (355 Reviews)</Text>
      <Text style={styles.price}>Price: Free</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Start now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 30, paddingTop: 60 },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 10 },
  xp: { fontSize: 16, marginBottom: 10, color: '#E67E22' },
  description: { fontSize: 14, color: '#444', marginBottom: 20 },
  rating: { fontSize: 14, marginBottom: 10 },
  price: { fontSize: 14, marginBottom: 30 },
  button: { backgroundColor: '#000', paddingVertical: 15, alignItems: 'center', borderRadius: 8 },
  buttonText: { color: '#fff', fontSize: 16 },
});

export default ChallengeScreen;
