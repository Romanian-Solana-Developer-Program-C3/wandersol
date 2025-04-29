import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const challenges = [
  { id: '1', title: 'Halloween in Bucharest', difficulty: 'hard', rating: 4.5 },
  { id: '2', title: 'Bucharest by Day', difficulty: 'easy', rating: 4.1 },
  { id: '3', title: 'Historic Bucharest', difficulty: 'medium', rating: 4.3 },
  { id: '4', title: 'Bucharest by Night', difficulty: 'easy', rating: 4.5 },
];

const CityScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Challenge', { challenge: item })}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.details}>{item.difficulty} • {item.rating}★</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Bucharest</Text>
      <Text style={styles.subHeader}>Find your next adventure</Text>
      <FlatList
        data={challenges}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f8f8', paddingTop: 60, paddingHorizontal: 20 },
  header: { fontSize: 32, fontWeight: 'bold' },
  subHeader: { fontSize: 16, marginVertical: 10 },
  card: { backgroundColor: '#fff', padding: 20, borderRadius: 10, marginBottom: 15, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 4 },
  title: { fontSize: 18, fontWeight: 'bold' },
  details: { fontSize: 14, color: '#555' },
});

export default CityScreen;
